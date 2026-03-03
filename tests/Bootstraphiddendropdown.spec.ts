import{test,expect,Locator} from  "@playwright/test";

test("Bootstrap hidden dropdown",async({page})=>{

     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

     // Login steps
  await page.locator('input[name="username"]').fill("Admin");
  await page.locator('input[name="password"]').fill("admin123");
  await page.locator('button[type="submit"]').click();

  // Click on the PIM
  await page.getByText("PIM").click();

  // Click on Job TITLE Dropdown
  await page.locator("form").nth(2).click();

  // Capture all the options from dropdown and count
  const option: Locator = page.locator('div[role="listbox"] span');

  const count: number = await option.count();
  console.log("Number of options in a dropdown:", count);

  // click on Job TITLE dropdown
await page.waitForTimeout(3000);

console.log("Print all the options.....");

for (let i = 0; i < count; i++) {
  // console.log(await options.nth(i).innerText());
  console.log(await option.nth(i).textContent());
}

// Select / click on option
for (let i = 0; i < count; i++) {

  const text = await option.nth(i).innerText();

  if (text === "Automation Tester") {
    await option.nth(i).click();
    break;
  }
}



});