import { test, expect } from '@playwright/test';

// test.describe.configure({ mode: 'serial' })

//test.describe.configure({ mode: 'parallel' })

test.describe('group1', () => {

  test('Test1', async ({ page }) => {
    console.log(" this is Test1 ......")
  });

  test('Test2', async ({ page }) => {
    console.log(" this is Test2 ......")
  });

  test('Test3', async ({ page }) => {
    console.log(" this is Test3 ......")
  });

});