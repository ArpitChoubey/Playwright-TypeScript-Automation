import{test,expect,Locator} from  "@playwright/test";

test("Verify dropdown contains duplicates",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Step 2: Locate dropdown options
  // Dropdown WITH duplicates
  const dropDownOptions: Locator = page.locator('#colors option');

  // Dropdown WITHOUT duplicates (optional)
  // const dropDownOptions: Locator = page.locator('#animals option');

  // Step 3: Extract all option texts and trim spaces
  const optionsText: string[] = (await dropDownOptions.allTextContents())
    .map(text => text.trim());

  // Step 4: Create Set & Array
  const mySet = new Set<string>();      // Set → duplicates NOT allowed
  const duplicates: string[] = [];      // Array → duplicates allowed

  // Step 5: Identify duplicate values
  for (const text of optionsText) {
    if (mySet.has(text)) {
      duplicates.push(text);
    } else {
      mySet.add(text);
    }
  }

  // Step 6: Log duplicates
  console.log('Duplicate options are ==> ', duplicates);

  if (duplicates.length > 0) {
    console.log('Duplicate options found:', duplicates);
  }

  // Step 7: Assertion (test will FAIL if duplicates exist)
  expect(duplicates.length).toBe(0);

});