import { test, expect, Locator } from '@playwright/test';

test('Handle Dynamic Elements using XPath', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Loop to click the button 5 times
  for (let i = 1; i <= 5; i++) {

    let button: Locator = page.locator("//button[text()='STOP' or text()='START']"); // Locate the button with either 'STOP' or 'START'

    // let button = await page.locator("//button[@name='start']");
    // let button = await page.locator("//button[@name='start' or @name='stop']");
    // let button = await page.locator("//button[contains(@name,'st')]");
    // let button = await page.locator("//button[starts-with(@name,'st')]");

    // Click the button
    await button.click();

    // Wait for 2 seconds
    await page.waitForTimeout(2000);
  }
});