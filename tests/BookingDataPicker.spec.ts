import { test, expect } from '@playwright/test';

test('Booking.com Date Picker - Check-in and Check-out', async ({ page }) => {

  await page.goto('https://www.booking.com/');

  // Open date picker
  await page.getByTestId('searchbox-dates-container').click();

  // ================= CHECK-IN DATE =================
  const checkinYear = '2026';
  const checkinMonth = 'June';
  const checkinDay = '20';

  // Navigate to required check-in month & year
  while (true) {
    const checkinHeader = await page.locator('h3[aria-live="polite"]').nth(0).innerText();
    const [currentMonth, currentYear] = checkinHeader.split(' ');

    if (currentMonth === checkinMonth && currentYear === checkinYear) {
      break;
    }
    await page.locator('button[aria-label="Next month"]').click();
  }

  // Select check-in date
  let checkinSelected = false;
  const checkinDates = await page
    .locator('table tbody')
    .nth(0)
    .locator('td')
    .all();

  for (const date of checkinDates) {
    if ((await date.innerText()) === checkinDay) {
      await date.click();
      checkinSelected = true;
      break;
    }
  }

  expect(checkinSelected).toBeTruthy();

  // ================= CHECK-OUT DATE =================
  const checkoutYear = '2026';
  const checkoutMonth = 'July';
  const checkoutDay = '25';

  // Navigate to required check-out month & year
  while (true) {
    const checkoutHeader = await page.locator('h3[aria-live="polite"]').nth(1).innerText();
    const [currentMonth, currentYear] = checkoutHeader.split(' ');

    if (currentMonth === checkoutMonth && currentYear === checkoutYear) {
      break;
    }
    await page.locator('button[aria-label="Next month"]').click();
  }

  // Select check-out date
  let checkoutSelected = false;
  const checkoutDates = await page
    .locator('table tbody')
    .nth(1)
    .locator('td')
    .all();

  for (const date of checkoutDates) {
    if ((await date.innerText()) === checkoutDay) {
      await date.click();
      checkoutSelected = true;
      break;
    }
  }

  expect(checkoutSelected).toBeTruthy();

  // Optional wait (visual validation)
  await page.waitForTimeout(3000);
});