import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
   await page.goto("https://sparklecartonline.com/");

   // expect( await page.screenshot()).toMatchSnapshot("homepage.png");

   await expect(page).toHaveScreenshot();


    const logo = page.locator('img.header__heading-logo.motion-reduce');
    expect( await logo.screenshot()).toMatchSnapshot("logo.png");



});