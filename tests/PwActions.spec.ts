import {test,expect,Locator} from '@playwright/test';

test('Playwright Input Actions ', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const testbox : Locator = page.locator("#phone");
      
    await expect(testbox).toBeVisible();

     await expect(testbox).toBeEnabled();

     const maxLength : any = await testbox.getAttribute("maxlength");

     expect(maxLength).toBe('10');
     
     await testbox.fill("8989899888");

     console.log("Input value of the phone :", await testbox.inputValue());
    

     const Evalue :string = await testbox.inputValue();

     expect(Evalue).toBe("8989899888");

     await page.waitForTimeout(3000);

});



test.only('Playwright Radiobutton Actions ', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const FemaleRadio : Locator = page.locator("#female");

    await expect(FemaleRadio).toBeVisible();

    await expect(FemaleRadio).toBeEnabled();

     expect(await FemaleRadio.isChecked()).toBe(false);

     await FemaleRadio.check();

     expect(await FemaleRadio.isChecked()).toBe(true);

     await expect(FemaleRadio).toBeChecked();

      await page.waitForTimeout(3000);

});

