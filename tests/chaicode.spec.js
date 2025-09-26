// @ts-check
import { test, expect } from "@playwright/test";
import { chromium } from "@playwright/test";

test(" navigate to the chai code login", async () => {
  const browser = await chromium.launch({
    headless: false,
    chromiumSandbox: true,
    args: ["--disable-extensions", "--disable-file-system"],
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ui.chaicode.com/auth/login");

  await page.getByPlaceholder("john@example.com").fill("john@example.com");
  await page.getByLabel("password").fill("asdf1234");

  await page.getByRole("button", { name: "Sign In" }).click();

  await browser.close();
});
