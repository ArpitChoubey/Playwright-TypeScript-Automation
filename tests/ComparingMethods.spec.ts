import { test, expect, Locator } from '@playwright/test';

test("Comparing methods", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  const products: Locator = page.locator('.product-title');



  // 1) innerText() Vs textContent()

// console.log(await products.nth(1).innerText());   //14.1-inch Laptop
// console.log(await products.nth(1).textContent());

const count = await products.count();

for (let i = 0; i < count; i++) {

  // const productName: string = await products.nth(i).innerText();
  // Extracts plain text. Eliminates whitespace and line breaks
  // console.log(productName);

  // const productName: string | null = await products.nth(i).textContent();
  // Extracts text including hidden elements.
  // console.log(productName);

  const productName: string | null = await products.nth(i).textContent();
  // Extracts text including hidden elements. Includes whitespace and line breaks

  console.log(productName?.trim());
}

// 2) allInnerText() Vs allTextContent()

console.log("**** Comparing allInnerText() Vs allTextContent() *****")

// const productNames: string[] = await products.allInnerTexts()
// console.log("Product Names captured by allInnerText(): ", productNames)

const productNames: string[] = await products.allTextContents()
console.log("Product Names captured by allTextContent(): ", productNames)

const productNamesTrimmed: string[] = productNames.map(text => text.trim());
console.log("Product Names after trimmed : ", productNamesTrimmed)

// 3) all() - converts Locator ---> Locator[]

const productsLocators: Locator[] = await products.all();
console.log(productsLocators);

// console.log(await productsLocators[1].innerText());

for (let productloc of productsLocators) {
  console.log(await productloc.innerText());
}
// for in loop

for (let i in productsLocators)
{
    await productsLocators[i].innerText()
}


});