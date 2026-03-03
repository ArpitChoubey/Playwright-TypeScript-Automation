import{test,expect,Locator} from  "@playwright/test";

test("Single Select Dropdown Test",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#country').selectOption('India');
    //await page.locator('#country').selectOption({'label': 'India'});
   // await page.locator('#country').selectOption({'value': 'India'});

   const dropdownOptions : Locator = page.locator('#country>option');

   await expect(dropdownOptions).toHaveCount(10);

   const optionsText = (await dropdownOptions.allTextContents()).map((text) => text.trim());
   console.log(optionsText);


   expect(optionsText).toContain('India');

   for(const option of optionsText)
   {
    console.log(option);
   }

  await page.waitForTimeout(3000);

})