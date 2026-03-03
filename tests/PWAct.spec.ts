import {test,expect,Locator} from '@playwright/test';

test('Playwright Input Actions ', async({page}) => {

    // 1. Select specific checkbox (Saturday) using getByLabel and assert

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const saturdayCheckbox : Locator = page.getByLabel('saturday');

    await saturdayCheckbox.check();

    await expect(saturdayCheckbox).toBeChecked();

     await page.waitForTimeout(3000);



     // 2. Select all checkboxes and assert each is checked
const days: string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const checkboxes: Locator[] = days.map(index => page.getByLabel(index));
expect(checkboxes.length).toBe(7);

await page.waitForTimeout(3000);

// 3. Select all checkboxes and assert each is checked
for (const checkbox of checkboxes)
{
  await checkbox.check();
  await expect(checkbox).toBeChecked();
}
await page.waitForTimeout(3000);

// 4. Uncheck last 3 checkboxes and assert

for (const checkbox of checkboxes.slice(-3)) {
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
}
await page.waitForTimeout(3000);

// Toggle checkboxes: if checked, uncheck; if unchecked, check. Assert state flipped.

  for (const checkbox of checkboxes) {

    if (await checkbox.isChecked()) { // true

      // only if checked
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();

    } else {

      // only if not checked
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  }

  await page.waitForTimeout(3000);

  // 7. Randomly select check boxes - Select checkboxes by index (1, 3, 6) and assert

const indexes: number[] = [1, 3, 6];

for (const i of indexes)
{
    checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();
}

    await page.waitForTimeout(3000);

    //7. Select the check box based on the Label
const weekname:string="Friday";

for(const label of days)
{
    if(label.toLowerCase()===weekname.toLowerCase())
    {
        const checkbox=page.getByLabel(label);
        checkbox.check();
        await expect(checkbox).toBeChecked();
    }
}

});

