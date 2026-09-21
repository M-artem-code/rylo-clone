import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const routes = ["/", "/solutions", "/system", "/projects", "/process", "/contacts"];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const route of routes) {
  const response = await page.goto(BASE + route, { waitUntil: "networkidle" });
  if (!response || response.status() >= 400) {
    throw new Error(`Route ${route} failed: ${response?.status()}`);
  }
  console.log("ok", route, response.status());
}

await page.goto(BASE + "/", { waitUntil: "networkidle" });
await page.getByRole("link", { name: "Решения", exact: true }).first().click();
await page.waitForURL("**/solutions");
console.log("nav solutions");

await page.getByRole("link", { name: "Контакты", exact: true }).first().click();
await page.waitForURL("**/contacts");
console.log("nav contacts");

await page.getByRole("button", { name: "Получить расчёт" }).click();
const error = await page.getByText("Заполните имя и телефон.").isVisible();
if (!error) throw new Error("form error state missing");
console.log("form error ok");

await page.getByPlaceholder("Александр").fill("Александр");
await page.getByPlaceholder("+7").fill("+7 495 120-45-80");
await page.getByRole("button", { name: "Получить расчёт" }).click();
const success = await page.getByText("Заявка принята").isVisible();
if (!success) throw new Error("form success state missing");
console.log("form success ok");

const mobile = await browser.newPage({ viewport: { width: 430, height: 932 } });
await mobile.goto(BASE + "/", { waitUntil: "networkidle" });
await mobile.getByLabel("Открыть меню").click();
await mobile.getByRole("link", { name: "Проекты" }).click();
await mobile.waitForURL("**/projects");
console.log("mobile nav projects");

await browser.close();
console.log("functional qa passed");
