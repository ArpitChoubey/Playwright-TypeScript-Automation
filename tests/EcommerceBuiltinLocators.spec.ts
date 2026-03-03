import{test,expect,Locator} from  "@playwright/test";

test("Verify Playwright locators",async({page})=>{
    await page.goto("https://sparklecartonline.com/");

    const logo : Locator = page.getByAltText("SparkleCart");

    await expect(logo).toBeVisible();

    await expect(page.getByText('Browse our latest products')).toBeVisible();

    await page.getByRole('button', { name: 'Search' }).click();

    await page.getByPlaceholder('Search').fill("Candle Melting Lamp");

    await expect(page.locator('#HeaderMenu-home')).toBeVisible();

});