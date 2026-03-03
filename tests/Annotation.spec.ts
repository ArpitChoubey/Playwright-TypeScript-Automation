import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
   await page.goto("https://sparklecartonline.com/");
  
      const logo = page.getByAltText("SparkleCart");
});

test.fail('test2', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});
  test.only('test3', async ({ page }) => {
   await page.goto("https://sparklecartonline.com/");
  
      const logo  = page.getByAltText("SparkleCart");
});

test.skip('test4', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});

  test.fixme('test5', async ({ page }) => {
   await page.goto("https://sparklecartonline.com/");
  
      const logo  = page.getByAltText("SparkleCart");
});

test('test6', async ({ page }) => {
    test.slow();
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});

//skip - based on teh condition
test('test7', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'this test skipped if browser is firfox');
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});