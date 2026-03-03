import { test, expect } from '@playwright/test';

test("Read data from all the table pages", async ({page})=>{

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    let hasmorepages = true;

    while (hasmorepages)
{
    const rows = await page.locator("#example tbody tr").all();
    for (let row of rows)
    {
        console.log(await row.innerText());
    }

    //button[aria-label='Next']
    //button[aria-controls='example']:has-text(">")
    //button[aria-controls='example']:nth-child(9)

    const nextButton = page.locator("//button[aria-label='Next']");
    const isDisabled = await nextButton.getAttribute('class'); // dt-paging-button disabled next

    if (isDisabled?.includes('disabled'))
    {
        hasmorepages = false;
    }
    else {
        await nextButton.click()
    }
}

});

test.only("Filter the rows and check the rows count", async ({page})=>{

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    const dropdown = page.locator("#dt-length-0");
    await dropdown.selectOption({ label: '25' });

    const rows = await page.locator("#example tbody tr").all();
    expect(rows.length).toBe(25); // assertion

    const rows2 = page.locator("#example tbody tr");
    await expect(rows2).toHaveCount(25);
});

test.only("Search for specific data in a table", async ({ page }) => {

  await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

  const searchbox = page.locator('#dt-search-0');
  await searchbox.fill('Paul Byrd');

  const rows = await page.locator("#example tbody tr").all();

  if (rows.length >= 1)
  {
    let matchFound = false;

    for (let row of rows)
    {
      const text = await row.innerText();
      if (text.includes('Paul Byrd'))
      {
        console.log("Record exist- found");
        matchFound = true;
        break;
      }
    }

    expect(matchFound).toBe(true);
    //expect(matchFound).toBeTruthy();
  }
  else
  {
    console.log("No Rows found with search text");
  }
});