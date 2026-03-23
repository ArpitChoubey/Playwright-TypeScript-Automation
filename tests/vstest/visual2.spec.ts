import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
   await page.goto("https://sparklecartonline.com/");

   await page.goto("https://sparklecartonline.com/pages/contact");

   

   await expect(page).toHaveScreenshot();

});