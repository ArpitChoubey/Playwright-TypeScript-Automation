import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test("accessibility test", async ({ page }, testInfo) => {

  await page.goto('https://sparklecartonline.com/');

  // 1) Scanning detect all types of WCAG violations.
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  console.log(accessibilityScanResults);

  expect(accessibilityScanResults.violations.length).toEqual(0);

  // 2) Scanning for few WCAG violations

const accessibilityScanResults2 = await new AxeBuilder({ page })
  .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  .analyze();

   

   await testInfo.attach('accessibility results 2', {
    body: JSON.stringify(accessibilityScanResults2, null, 2),
    contentType: 'application/json'
  });

console.log("Number of violations:", accessibilityScanResults2.violations.length);

expect(accessibilityScanResults2.violations.length).toEqual(0);


//3) Scanning for WCAG violations with rules
 const accessibilityScanResult= await new AxeBuilder({ page }).disableRules(['duplicate-id']).analyze();

await testInfo.attach('accessibility results', {
  body: JSON.stringify(accessibilityScanResult, null, 2),
  contentType: 'application/json'
});

console.log("Number of violations:---->", accessibilityScanResult.violations.length);
expect(accessibilityScanResult.violations.length).toEqual(0);

});