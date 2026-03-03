import { test, expect, Locator } from '@playwright/test';

test('Handle Dynamic Elements using using css locator', async ({ page }) => {

  // Navigate to the target page
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Loop to click the button 5 times
  for (let i = 1; i <= 5; i++) {

    // Locate the button using a CSS attribute selector (name can be 'start' or 'stop')
    const button = page.locator('button[name="start"], button[name="stop"]');

    // Click the button
    await button.click();

    // Wait for 2 seconds
    await page.waitForTimeout(2000);
  }
});