import { test, expect } from '@playwright/test';

test('Tracing test', async ({ page,context }) => {

   await context.tracing.start({
    screenshots: true,
    snapshots: true,
    sources: true,
  });

  try {
    await page.goto('https://sparklecartonline.com/');

    // 
    await expect(
      page.getByText('Welcome to our SPARKLECART')
    ).toBeVisible();

    await page.getByRole('link', { name: 'Contact' }).click();

    await page.getByRole('textbox', { name: 'Name' }).fill('Rohit');
    await page.getByLabel('Email *').fill('choubeyrtt@gmail.com');
    await page.getByRole('textbox', { name: 'Phone number' }).fill('9636635888');
    await page.getByRole('textbox', { name: 'Comment' }).fill('hfhf znsnsns');

  } finally {
    await context.tracing.stop({ path: 'trace.zip' });
  }
});
