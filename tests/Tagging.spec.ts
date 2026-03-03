import { test, expect } from '@playwright/test';

test('@sainty test1', async ({ page }) => {
   await page.goto("https://sparklecartonline.com/");
  
      const logo = page.getByAltText("SparkleCart");
});

test('@functional test2', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});
  test(' test3',{tag : ['sainty', 'regression']}, async ({ page }) => {
   await page.goto("https://sparklecartonline.com/");
  
      const logo  = page.getByAltText("SparkleCart");
});

test('@functional test4', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});
  test(' test5',{tag : 'regression'}, async ({ page }) => {
   await page.goto("https://sparklecartonline.com/");
  
      const logo  = page.getByAltText("SparkleCart");
});