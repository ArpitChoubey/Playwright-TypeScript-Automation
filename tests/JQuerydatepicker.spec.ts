import { test, expect, Locator } from "@playwright/test"

test("JQuery datepicker", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dateInput:Locator = page.locator("#datepicker");
    expect(dateInput).toBeVisible();

    //using fill() method
    dateInput.fill("09/27/2026");   //mm/dd/yyyy

    await page.waitForTimeout(5000);

    await dateInput.click(); //opens the date picker

//select target date
const year='2026';
const month='June';
const date='15';

while(true)
{
    const currentMonth=await page.locator('.ui-datepicker-month').textContent();
    const currentYear=await page.locator('.ui-datepicker-year').textContent();

    if(currentMonth===month && currentYear===year)
    {
        break;
    }

    //Future
    await page.locator('.ui-datepicker-next').click();

    //Past
  // await page.locator('.ui-datepicker-prev').click();
}

const allDates = await page.locator(".ui-datepicker-calendar td").all();

for (let dt of allDates)
{
    const dateText = await dt.innerText();
    if (dateText === date)
    {
        await dt.click();
        break;
    }
}

await page.waitForTimeout(5000);

});