import { test, expect, Locator } from "@playwright/test";

test("XPath demo in playwright", async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/");

  //1. Absolute xpath - logo
  const absolutelogo: Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
  await expect(absolutelogo).toBeVisible();

  //2. Relative xpath - logo
  const relativelogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
  await expect(relativelogo).toBeVisible();


  //3. contains()

const products:Locator=page.locator("//h2/a[contains(@href,'computer')]");

const productsCount: number= await products.count();
console.log("No of Computer related products:",productsCount);   //4
expect(productsCount).toBeGreaterThan(0);

//console.log(await products.textContent());  //Error: strict mode violation:

console.log("First computer related product:", await products.first().textContent());
console.log("Last computer related product:", await products.last().textContent());
console.log("Nth computer related product:", await products.nth(3).textContent());

let productTitles:string[]=await products.allTextContents(); // getting all the matched products in to an array

for(let pt of productTitles)
{
    console.log(pt);
}

//4. start-with()

const buildignProducts:Locator=page.locator("//h2/a[starts-with(@href,'/build')]"); // returns multiple elements

const count : number=await buildignProducts.count();
expect(count).toBeGreaterThan(0);

//5. text() .

const reglink: Locator=page.locator("//a[text()='Register']");
await expect(reglink).toBeVisible();

//6. last()

const lastitem: Locator=page.locator("//div[@class='column follow-us']//li[last()]");
await expect(lastitem).toBeVisible();

//7. position()

const positionitem: Locator=page.locator("//div[@class='column follow-us']//li[position(3)]");
await expect(positionitem).toBeVisible();



})