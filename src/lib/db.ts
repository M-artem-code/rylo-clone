import { randomBytes, randomUUID } from "crypto";
import { Pool, type QueryResultRow } from "pg";

import { SEED } from "./catalog";

export type PublicMaid = {
  id: string;
  name: string;
  hour: number;
  areas: string[];
  areasText: string;
  langs: string[];
  langsText: string;
  services: string[];
  slots: string[];
  photo: string;
  open: boolean;
};

export type PrivateMaid = PublicMaid & { email: string };

export type OrderView = {
  id: string;
  maidId: string;
  maidName: string;
  maidPhoto: string;
  clientName: string;
  phone: string;
  city: string;
  m2: number;
  type: string;
  hours: number;
  date: string;
  slot: string;
  sum: number;
  status: "sent" | "accepted" | "declined";
};

type MaidRow = QueryResultRow & {
  id: string;
  email: string | null;
  password_hash: string | null;
  name: string;
  hour: number;
  areas: unknown;
  langs: unknown;
  services: unknown;
  slots: unknown;
  photo: string | null;
  open: boolean;
};

const globalPool = globalThis as unknown as { gornichPool?: Pool };

function hasDatabase() {
  return Boolean(process.env.DATABASE_URL);
}

function connectionString() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("no_database");
  return url;
}

function seedMaids(): PublicMaid[] {
  return [...SEED].reverse().map((maid) => ({
    id: maid.id,
    name: maid.name,
    hour: maid.hour,
    areas: [...maid.areas],
    areasText: maid.areas.join(", "),
    langs: [...maid.langs],
    langsText: maid.langs.join(" · "),
    services: [...maid.services],
    slots: [...maid.slots],
    photo: maid.photo,
    open: true,
  }));
}

function matchesFilter(maid: PublicMaid, filter: { type?: string; areas?: string[]; langs?: string[] }) {
  const okType = !filter.type || maid.services.includes(filter.type);
  const okArea = !filter.areas?.length || maid.areas.some((area) => filter.areas?.includes(area));
  const okLang = !filter.langs?.length || maid.langs.some((lang) => filter.langs?.includes(lang));
  return okType && okArea && okLang;
}

function getPool() {
  if (!globalPool.gornichPool) {
    const url = connectionString();
    const local = /localhost|127\.0\.0\.1/.test(url);
    globalPool.gornichPool = new Pool({
      connectionString: url,
      max: 5,
      ssl: local ? undefined : { rejectUnauthorized: false },
    });
  }
  return globalPool.gornichPool;
}

function asList(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function toPublic(row: MaidRow): PublicMaid {
  const areas = asList(row.areas);
  const langs = asList(row.langs);
  return {
    id: row.id,
    name: row.name,
    hour: Number(row.hour),
    areas,
    areasText: areas.join(", "),
    langs,
    langsText: langs.join(" · "),
    services: asList(row.services),
    slots: asList(row.slots),
    photo: row.photo || "",
    open: Boolean(row.open),
  };
}

function toPrivate(row: MaidRow): PrivateMaid {
  return { ...toPublic(row), email: row.email || "" };
}

let pending: Promise<void> | null = null;

export function ready() {
  if (!pending) {
    pending = migrate().catch((error) => {
      pending = null;
      throw error;
    });
  }
  return pending;
}

async function migrate() {
  const pool = getPool();
  await pool.query(`
    CREATE TABLE IF NOT EXISTS maids (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE,
      password_hash TEXT,
      name TEXT NOT NULL,
      hour INTEGER NOT NULL,
      areas JSONB NOT NULL,
      langs JSONB NOT NULL,
      services JSONB NOT NULL,
      slots JSONB NOT NULL,
      photo TEXT NOT NULL DEFAULT '',
      open BOOLEAN NOT NULL DEFAULT FALSE,
      seeded BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE TABLE IF NOT EXISTS sessions (
      token TEXT PRIMARY KEY,
      maid_id TEXT NOT NULL REFERENCES maids(id) ON DELETE CASCADE,
      expires_at TIMESTAMPTZ NOT NULL
    );
    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      maid_id TEXT NOT NULL REFERENCES maids(id) ON DELETE CASCADE,
      client_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      city TEXT NOT NULL DEFAULT '',
      m2 INTEGER NOT NULL,
      type TEXT NOT NULL,
      hours INTEGER NOT NULL,
      visit_date TEXT NOT NULL,
      slot TEXT NOT NULL,
      sum INTEGER NOT NULL,
      status TEXT NOT NULL DEFAULT 'sent',
      secret TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      CONSTRAINT orders_status_check CHECK (status IN ('sent', 'accepted', 'declined'))
    );
    CREATE INDEX IF NOT EXISTS orders_maid_idx ON orders (maid_id, created_at DESC);
  `);
  for (const maid of SEED) {
    await pool.query(
      `INSERT INTO maids (id, email, password_hash, name, hour, areas, langs, services, slots, photo, open, seeded)
       VALUES ($1, NULL, NULL, $2, $3, $4::jsonb, $5::jsonb, $6::jsonb, $7::jsonb, $8, TRUE, TRUE)
       ON CONFLICT (id) DO NOTHING`,
      [
        maid.id,
        maid.name,
        maid.hour,
        JSON.stringify(maid.areas),
        JSON.stringify(maid.langs),
        JSON.stringify(maid.services),
        JSON.stringify(maid.slots),
        maid.photo,
      ],
    );
  }
}

export async function listMaids(filter: { type?: string; areas?: string[]; langs?: string[] }) {
  if (!hasDatabase()) return seedMaids().filter((maid) => matchesFilter(maid, filter));
  await ready();
  const { rows } = await getPool().query<MaidRow>(
    "SELECT * FROM maids WHERE open = TRUE ORDER BY seeded ASC, created_at DESC",
  );
  return rows.map(toPublic).filter((maid) => matchesFilter(maid, filter));
}

export async function getOpenMaid(id: string) {
  if (!hasDatabase()) return seedMaids().find((maid) => maid.id === id) ?? null;
  await ready();
  const { rows } = await getPool().query<MaidRow>("SELECT * FROM maids WHERE id = $1 AND open = TRUE", [id]);
  return rows[0] ? toPublic(rows[0]) : null;
}

async function getRow(id: string) {
  const { rows } = await getPool().query<MaidRow>("SELECT * FROM maids WHERE id = $1", [id]);
  return rows[0] ?? null;
}

export async function findAuthByEmail(email: string) {
  await ready();
  const { rows } = await getPool().query<MaidRow>("SELECT * FROM maids WHERE lower(email) = lower($1)", [email]);
  const row = rows[0];
  if (!row) return null;
  return { maid: toPrivate(row), passwordHash: row.password_hash };
}

export async function createMaid(input: {
  email: string;
  passwordHash: string;
  name: string;
  hour: number;
  areas: string[];
  langs: string[];
  services: string[];
  slots: string[];
  photo: string;
}) {
  await ready();
  const id = randomUUID();
  await getPool().query(
    `INSERT INTO maids (id, email, password_hash, name, hour, areas, langs, services, slots, photo, open, seeded)
     VALUES ($1, $2, $3, $4, $5, $6::jsonb, $7::jsonb, $8::jsonb, $9::jsonb, $10, TRUE, FALSE)`,
    [
      id,
      input.email.toLowerCase(),
      input.passwordHash,
      input.name,
      input.hour,
      JSON.stringify(input.areas),
      JSON.stringify(input.langs),
      JSON.stringify(input.services),
      JSON.stringify(input.slots),
      input.photo,
    ],
  );
  const row = await getRow(id);
  if (!row) throw new Error("server");
  return toPrivate(row);
}

export async function updateMaid(
  id: string,
  input: {
    name: string;
    hour: number;
    areas: string[];
    langs: string[];
    services: string[];
    slots: string[];
    photo: string;
    open: boolean;
  },
) {
  await ready();
  await getPool().query(
    `UPDATE maids
     SET name = $2, hour = $3, areas = $4::jsonb, langs = $5::jsonb, services = $6::jsonb, slots = $7::jsonb, photo = $8, open = $9
     WHERE id = $1`,
    [
      id,
      input.name,
      input.hour,
      JSON.stringify(input.areas),
      JSON.stringify(input.langs),
      JSON.stringify(input.services),
      JSON.stringify(input.slots),
      input.photo,
      input.open,
    ],
  );
  const row = await getRow(id);
  return row ? toPrivate(row) : null;
}

export async function createSession(maidId: string) {
  await ready();
  const token = randomBytes(32).toString("hex");
  await getPool().query(
    "INSERT INTO sessions (token, maid_id, expires_at) VALUES ($1, $2, NOW() + INTERVAL '30 days')",
    [token, maidId],
  );
  return token;
}

export async function deleteSession(token: string) {
  await ready();
  await getPool().query("DELETE FROM sessions WHERE token = $1", [token]);
}

export async function getMaidBySession(token: string) {
  await ready();
  const { rows } = await getPool().query<MaidRow>(
    `SELECT m.* FROM sessions s
     JOIN maids m ON m.id = s.maid_id
     WHERE s.token = $1 AND s.expires_at > NOW()`,
    [token],
  );
  return rows[0] ? toPrivate(rows[0]) : null;
}

const ORDER_SQL = `
  SELECT o.id, o.maid_id, m.name AS maid_name, m.photo AS maid_photo,
         o.client_name, o.phone, o.city, o.m2, o.type, o.hours, o.visit_date,
         o.slot, o.sum, o.status, o.secret
  FROM orders o
  JOIN maids m ON m.id = o.maid_id
`;

type OrderRow = QueryResultRow & {
  id: string;
  maid_id: string;
  maid_name: string;
  maid_photo: string | null;
  client_name: string;
  phone: string;
  city: string;
  m2: number;
  type: string;
  hours: number;
  visit_date: string;
  slot: string;
  sum: number;
  status: OrderView["status"];
  secret: string;
};

function toOrder(row: OrderRow): OrderView {
  return {
    id: row.id,
    maidId: row.maid_id,
    maidName: row.maid_name,
    maidPhoto: row.maid_photo || "",
    clientName: row.client_name,
    phone: row.phone,
    city: row.city,
    m2: Number(row.m2),
    type: row.type,
    hours: Number(row.hours),
    date: row.visit_date,
    slot: row.slot,
    sum: Number(row.sum),
    status: row.status,
  };
}

export async function createOrder(input: {
  maidId: string;
  clientName: string;
  phone: string;
  city: string;
  m2: number;
  type: string;
  hours: number;
  date: string;
  slot: string;
  sum: number;
}) {
  await ready();
  const id = randomUUID();
  const secret = randomBytes(16).toString("hex");
  await getPool().query(
    `INSERT INTO orders (id, maid_id, client_name, phone, city, m2, type, hours, visit_date, slot, sum, status, secret)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,'sent',$12)`,
    [
      id,
      input.maidId,
      input.clientName,
      input.phone,
      input.city,
      input.m2,
      input.type,
      input.hours,
      input.date,
      input.slot,
      input.sum,
      secret,
    ],
  );
  const order = await getOrderBySecret(id, secret);
  if (!order) throw new Error("server");
  return { ...order, secret };
}

export async function getOrderBySecret(id: string, secret: string) {
  await ready();
  const { rows } = await getPool().query<OrderRow>(`${ORDER_SQL} WHERE o.id = $1 AND o.secret = $2`, [id, secret]);
  return rows[0] ? toOrder(rows[0]) : null;
}

export async function listOrdersForMaid(maidId: string) {
  await ready();
  const { rows } = await getPool().query<OrderRow>(`${ORDER_SQL} WHERE o.maid_id = $1 ORDER BY o.created_at DESC`, [maidId]);
  return rows.map(toOrder);
}

export async function setOrderStatus(id: string, maidId: string, status: "accepted" | "declined") {
  await ready();
  const { rowCount } = await getPool().query(
    `UPDATE orders SET status = $3 WHERE id = $1 AND maid_id = $2 AND status = 'sent'`,
    [id, maidId, status],
  );
  if (!rowCount) return null;
  const { rows } = await getPool().query<OrderRow>(`${ORDER_SQL} WHERE o.id = $1 AND o.maid_id = $2`, [id, maidId]);
  return rows[0] ? toOrder(rows[0]) : null;
}
