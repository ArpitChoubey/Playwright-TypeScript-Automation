import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

// ...rest of your test...

test('User can login, add a product to the cart', async ({ page }) => {

  await page.goto("https://www.demoblaze.com/index.html")

  //Login Page
  const loginPage = new LoginPage(page);

  /*
  loginPage.clickLoginLink();
  loginPage.enterUserName("pavan01");
  loginPage.enterPassword("test@123");
  loginPage.clickOnLoginButton();
  */

  await loginPage.performLogin("pavan01", "test@123");


  //Homepage
  const homePage = new HomePage(page);
  await homePage.addProductToCart("Samsung galaxy s6");
  await homePage.gotoCart();


  //Cart Page
  const cartPage = new CartPage(page);
  const isProductInCart = await cartPage.checkProductInCart("Samsung galaxy s6");
  expect(isProductInCart).toBe(true);

});