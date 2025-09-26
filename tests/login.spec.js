// @ts-check
import { test, expect } from "@playwright/test";
import { chromium } from "@playwright/test";

test("should navigate to the form", async () => {
  const browser = await chromium.launch({
    headless: false,
    chromiumSandbox: true,
    args: ["--disable-extensions", "--disable-file-system"],
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("http://localhost:5173/form", {
    waitUntil: "networkidle",
    timeout: 4500,
  });

  await page.getByPlaceholder("Full Name").fill("Anurag dubey");
  await page.getByPlaceholder("Email").fill("anuragd2169@gmail.com");
  await page.getByPlaceholder("password").fill("anuragd2169@gmail.com");

  await page.getByRole("button").click();

  await browser.close();
});

