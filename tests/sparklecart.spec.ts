import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sparklecartonline.com/');
  await expect(page.getByRole('link', { name: 'Welcome to our SPARKLECART |' })).toBeVisible();
  await expect(page.locator('#shopify-section-template--17654219276463__rich_text')).toContainText('Browse our latest products');
  await expect(page.locator('#HeaderMenu-contact')).toMatchAriaSnapshot(`- text: Contact`);
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('heading', { name: 'Contact', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Rohit ');
  await page.getByLabel('Email *').click();
  await page.getByLabel('Email *').fill('choubeyrtt@gmail.com');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('96366355888');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('hfhf  znsnsns');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Skip Challenge' }).click();
  await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Skip Challenge' }).click();
});