import { test, expect, Page } from '@playwright/test';

let page: Page;

test.beforeAll('Open app', async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://www.demoblaze.com/index.html");
});

test.afterAll('Closing App', async () => {
  await page.close();
});
test.beforeEach('Login', async () => {

  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator("button[onclick='logIn()']").click();
  await page.waitForTimeout(2000);

});

test.afterEach('Login', async () => {
  await page.locator('#logout2').click();
});

test.describe('My Group', async () => {

test('Find NoOf products', async () => {

  const products = page.locator("//tbodyid //href");
  const count = await products.count();
  console.log('Number of products:', count);
  await expect(products).toHaveCount(9);

});

test('Add Product to cart', async () => {

  await page.locator("text='Samsung galaxy s6'").click();

  // Handle alert before the click
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  });

  await page.locator('.btn.btn-success.btn-lg').click();

});
});