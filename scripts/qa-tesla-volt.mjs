import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const OUT = path.resolve("docs/design/tesla-volt/qa");

const shots = [
  { name: "qa-01-hero", url: "/", width: 1920, height: 1080 },
  { name: "qa-02-solutions", url: "/solutions", width: 1920, height: 1080 },
  { name: "qa-04-system", url: "/system", width: 1920, height: 1080 },
  { name: "qa-06-projects", url: "/projects", width: 1920, height: 1080 },
  { name: "qa-08-process", url: "/process", width: 1920, height: 1080 },
  { name: "qa-10-contacts", url: "/contacts", width: 1920, height: 1080 },
  { name: "qa-11-hero-mobile", url: "/", width: 430, height: 932 },
  { name: "qa-12-contacts-mobile", url: "/contacts", width: 430, height: 932 },
];

const homeSections = [
  { name: "qa-03-numbers", selector: "#numbers" },
  { name: "qa-05-smarthome", selector: "#smarthome" },
  { name: "qa-07-why", selector: "#why" },
  { name: "qa-09-cta", selector: "#cta" },
];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();

for (const shot of shots) {
  const page = await browser.newPage({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: 1,
  });
  await page.goto(BASE + shot.url, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.screenshot({
    path: path.join(OUT, `${shot.name}.png`),
    animations: "disabled",
  });
  await page.close();
  console.log("wrote", shot.name);
}

const page = await browser.newPage({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
});
await page.goto(BASE + "/", { waitUntil: "networkidle" });
for (const section of homeSections) {
  await page.locator(section.selector).scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(OUT, `${section.name}.png`),
    animations: "disabled",
  });
  console.log("wrote", section.name);
}
await page.close();
await browser.close();
