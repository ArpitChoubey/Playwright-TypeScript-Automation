import { test, expect } from '@playwright/test';

test('Autowaiting and forcing', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  // Assertions - Auto wait works
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
  await expect(page.locator('text=Welcome to our store')).toBeVisible();

  // Actions - Auto wait works
  await page
    .locator('#small-searchterms')
    .fill('Laptop', { force: true }); // search box - Force action (it will not be actionable)

  await page
    .locator('.button-1.search-box-button')
    .click({ force: true }); // clicking on search button - Force action
});