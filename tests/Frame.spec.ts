import { test, expect } from "@playwright/test";

test.describe("Playwright Frames – Complete Demo", () => {

  test("Frames demo – all approaches", async ({ page }) => {

    // Step 1: Open frames page
    await page.goto("https://ui.vision/demo/webtest/frames/");

    // --------------------------------------------------
    // Step 2: Get total number of frames on the page
    // --------------------------------------------------
    const frames = page.frames();
    console.log("Total number of frames:", frames.length);

    // --------------------------------------------------
    // Step 3: Approach 1 – Using page.frame()
    // --------------------------------------------------
    const frame1 = page.frame({
      url: "https://ui.vision/demo/webtest/frames/frame_1.html"
    });

    if (frame1) {
      await frame1.locator("[name='mytext1']").fill("Hello");
    } else {
      console.log("Frame 1 is not available");
    }

    // --------------------------------------------------
    // Step 4: Approach 2 – Using frameLocator()
    // (Recommended & most stable)
    // --------------------------------------------------
    const inputBox = page
      .frameLocator("[src='frame_1.html']")
      .locator("[name='mytext1']");

    await inputBox.fill("John");

    // --------------------------------------------------
    // Step 5: Inner / Child Frames demo
    // --------------------------------------------------
    const frame3 = page.frame({
      url: "https://ui.vision/demo/webtest/frames/frame_3.html"
    });

    if (frame3) {
      await frame3.locator("[name='mytext3']").fill("Welcome");

      // Get child frames inside frame 3
      const childFrames = frame3.childFrames();
      console.log("Child frames inside Frame 3:", childFrames.length);
      const radio = childFrames[0].getByLabel("I am a human");
  await radio.check(); // select radio button
  await expect(radio).toBeChecked(); // assertion
    } 
    else {
      console.log("Frame 3 is not found");
    }

    // --------------------------------------------------
    // Step 6: Just for observation
    // --------------------------------------------------
    await page.waitForTimeout(5000);

  });

});