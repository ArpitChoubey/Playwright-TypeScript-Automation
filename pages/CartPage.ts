import { Page, Locator } from '@playwright/test';

export class CartPage {
  private page: Page;
  private productNamesInCart: Promise<Array<Locator>>;

  constructor(page: Page) {
    this.page = page;
    this.productNamesInCart = this.page.locator('#tbodyid tr td:nth-child(2)').all(); /// CSS selector to select all product names
  }

  // Method to check if a specific product is present in the cart
  async checkProductInCart(productName: string): Promise<boolean> {
    const products = await this.productNamesInCart;

    for (const product of products) {
      const name = (await product.textContent())?.trim() || '';
      console.log(name);
      if (name === productName) {
        return true;
      }
    }

    return false;
  }
}