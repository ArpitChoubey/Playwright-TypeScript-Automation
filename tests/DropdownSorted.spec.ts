import{test,expect,Locator} from  "@playwright/test";

test(" Drop down sorted", async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // const dropDownOptions: Locator = page.locator('#animals>option');
  const dropDownOptions: Locator = page.locator('#colors>option');

  // console.log(await dropDownOptions.allTextContents());

  const optionsText: string[] = (await dropDownOptions.allTextContents())
    .map(text => text.trim());

  const originalList: string[] = [...optionsText];
  const sortedList: string[] = [...optionsText].sort();

  console.log("Original list:", originalList);
  console.log("Sorted list:", sortedList);
});