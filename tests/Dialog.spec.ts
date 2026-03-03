import { test, expect } from '@playwright/test';

test('Dialog', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
// Enable Alert Handler --

  page.on('dialog', (dialog) => {
  console.log("Dialog type is:", dialog.type()); // returns type of the dialog
  expect(dialog.type()).toContain('alert');

  console.log("Dialog Text:", dialog.message()); // returns message from dialog
  expect(dialog.message()).toContain("I am an alert box!");

  dialog.accept();
});

 await page.locator('#alertBtn').click();

 await page.waitForTimeout(5000);

});

test.only("Confirmation Dialog", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  // Register a dialog handler
  page.on('dialog', (dialog) => {
    console.log("Dialog type is:", dialog.type()); // returns type of the dialog
    expect(dialog.type()).toContain('confirm');

    console.log("Dialog Text:", dialog.message()); // returns message from dialog
    expect(dialog.message()).toContain("Press a button!");

    // dialog.accept();  // close dialog by accepting
    dialog.dismiss();    // close dialog by dismissing
  });

 await page.locator("#confirmBtn").click(); // Opens confirmation dialog

const text: string = await page.locator("#demo").innerText();
console.log("Output text:", text);

await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
await page.waitForTimeout(5000);
});