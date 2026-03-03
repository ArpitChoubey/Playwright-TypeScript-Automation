import { test, expect, Page, chromium} from '@playwright/test';

test("Browser context demo", async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");

   const browser1 = await chromium.launch();        // Create browser
  const context1 = await browser.newContext();     // create context

  // creating 2 pages
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  console.log("No of pages created:", context.pages().length);

  await page1.goto("https://playwright.dev/");
await expect(page1).toHaveTitle(
  "Fast and reliable end-to-end testing for modern web apps | Playwright"
);

await page2.goto("https://www.selenium.dev/");
await expect(page2).toHaveTitle("Selenium");

await page1.waitForTimeout(5000);
await page2.waitForTimeout(5000);


});