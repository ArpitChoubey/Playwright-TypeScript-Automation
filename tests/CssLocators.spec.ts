import{test,expect,Locator} from  "@playwright/test";

test("Verify CSS locators",async({page})=>{
    await page.goto("https://sparklecartonline.com/");

   const contactlink : Locator = page.locator('a[id=\'HeaderMenu-contact\'] span');
   await contactlink.click();

  await page.locator('#ContactForm-name').fill("Jio Network");

  await page.locator('#ContactForm-phone').fill('98765432222');

  await page.locator('#ContactForm-email').fill('test@gmail.com');

  const commentBox = page.getByPlaceholder('Comment');
await commentBox.waitFor({ state: 'visible' });
await commentBox.fill('Playwright is a great tool');


// await page.locator('[ placeholder="Comment"]').fill('Playwright');



  await page.waitForTimeout(5000);

});