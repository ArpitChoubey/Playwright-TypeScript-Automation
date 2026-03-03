import { test, expect } from '@playwright/test';

test.only('Prompt Dialog', async ({ page }) => {

  // Navigate to application
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Register dialog handler
  page.on('dialog', async (dialog) => {

    console.log('Dialog type is:', dialog.type());
    expect(dialog.type()).toContain('prompt'); // dialog type

    console.log('Dialog Text:', dialog.message());
    expect(dialog.message()).toContain('Please enter your name:'); // dialog message

    expect(dialog.defaultValue()).toContain('Harry Potter'); // default value

    // Accept prompt with input text
    await dialog.accept('John');

    // If needed, dismiss dialog
    // await dialog.dismiss();
  });

  // Open Prompt dialog
  await page.locator('#promptBtn').click();

  // Capture output text
  const text: string = await page.locator('#demo').innerText();
  console.log('Output text:', text);

  // Validate result text
  await expect(page.locator('#demo'))
    .toHaveText('Hello John! How are you today?');

  // Optional wait (not recommended for real tests)
  await page.waitForTimeout(5000);
});