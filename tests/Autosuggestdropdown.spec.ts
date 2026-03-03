import{test,expect,Locator} from  "@playwright/test";

test("Verify dropdown contains duplicates",async({page})=>{

     await page.goto("https://www.flipkart.com/");

  await page.locator("input[name='q']").fill("smart");  // Search text

  await page.waitForTimeout(5000);

  // Get all the suggested options --> Ctrl+Shift+P on DOM --> emulate focused page
  const options: Locator = page.locator("ul>li");

  const count = await options.count();
  console.log("Number of suggested options:", count);

  // printing all the suggested options in the console

console.log("5 th option:", await options.nth(5).innerText());

for (let i = 0; i < count; i++) {
  // console.log("5 th option:", await options.nth(i).innerText());
  console.log( await options.nth(i).textContent());

}

// select/click on the smartphone option

for (let i = 0; i < count; i++) {
  const text = await options.nth(i).innerText();
  if (text == "smartphone") {
    options.nth(i).click();
    break;
  }
}

  await page.waitForTimeout(3000);

});