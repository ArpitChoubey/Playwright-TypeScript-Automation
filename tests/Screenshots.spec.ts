import{test,expect,Locator} from  "@playwright/test";

test("Verify Playwright locators",async({page})=>{
    await page.goto("https://sparklecartonline.com/");

   const timestamp = Date.now();

// page|screen
await page.screenshot({ path: 'screenshots/' + 'homepage' + timestamp + '.png' })

// full page screenshot
 await page.screenshot({ path: 'screenshots/' + 'fullpage' + timestamp + '.png', fullPage: true })

// Element screenshot 
  const logo = page.getByRole('img', { name: 'SparkleCart' });

  await logo.waitFor({ state: 'attached' });

  await logo.screenshot({
    path: `screenshots/logo_${timestamp}.png`
  });

  // Element screenshot 2 
   
  await page.getByRole('img', { name: 'SparkleCart' }).screenshot({path:'screenshots/'+'logo'+timestamp+'.png'});




});

test.only('screenshots from config', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('arpitol');
  await page.locator('#loginpassword').fill('test@123s'); // password incorrect
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome arpitol');
});