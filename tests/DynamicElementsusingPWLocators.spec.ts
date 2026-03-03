import { test, expect, Locator } from '@playwright/test';

test('Handle Dynamic Elements using PW Locators', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Loop to click the button 5 times
  for (let i = 1; i <= 5; i++) {

    // Locate button by role and dynamic name
    const button = page.getByRole('button', { name: /START|STOP/ });

    // Click the button
    await button.click();

    // Wait for 2 seconds
    await page.waitForTimeout(2000);
  }
});