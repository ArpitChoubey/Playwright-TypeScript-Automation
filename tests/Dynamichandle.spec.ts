import { test, expect, Locator } from '@playwright/test';

test("Verify Chrome CPU load in dynamic table", async ({ page }) => {

  await page.goto("https://practice.expandtesting.com/dynamic-table");

  const table: Locator = page.locator("table.table tbody");
  await expect(table).toBeVisible();

  // Select all the rows, then find number of rows
  const rows: Locator[] = await table.locator("tr").all();
  console.log("Number of rows in a table:", rows.length);
  expect(rows).toHaveLength(4);


  // Step 1: For Chrome process get value of CPU load.
// Read each row & check Chrome presence

let cpuLoad = '';

for (const row of rows)
{
  const processName: string = await row.locator("td").nth(0).innerText();
  if (processName === "Chrome")
  {
    // cpuLoad = await row.locator("td:has-text('%')").innerText();
    cpuLoad = await row.locator("td", { hasText: "%" }).innerText();
    console.log("CPU Load of Chrome:", cpuLoad); // 72.9%
    break;
  }
}

// Step2: Compare it with value in the yellow label.
let yellowboxtext: string = await page.locator("#chrome-cpu").innerText();
console.log("Chrome CPU load from yellow box:", yellowboxtext);

if (yellowboxtext.includes(cpuLoad))
{
  console.log("CPU load of Chrome is equal.");
}
else
{
  console.log("CPU load of Chrome is Not equal.");
}

expect(yellowboxtext).toContain(cpuLoad);

await page.waitForTimeout(5000);

});