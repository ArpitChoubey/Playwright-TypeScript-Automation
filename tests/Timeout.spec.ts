import { test, expect } from '@playwright/test';

test('Timeouts', async ({ page }) => {

  test.setTimeout(50000); // 50 secs
  // test.slow(); // 90 secs (Default is 30 secs)

  await page.goto('https://demowebshop.tricentis.com/');

  // Assertions - Auto wait works
  await expect(page).toHaveURL(
    'https://demowebshop.tricentis.com/',
    { timeout: 10000 }
  );

  await expect(
    page.locator('text=Welcome to our store')
  ).toBeVisible({ timeout: 10000 });

  // Actions - Auto wait works
  await page
    .locator('#small-searchterms')
    .fill('Laptop', { force: true }); 
    // search box - Force action (it will not be actionable)

  await page
    .locator('.button-1.search-box-button')
    .click({ force: true }); 
    // clicking on search button - Force action
});