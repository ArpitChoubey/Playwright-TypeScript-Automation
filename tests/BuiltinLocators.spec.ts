import{test,expect,Locator} from  "@playwright/test";

test("Verify Playwright locators",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/");

    const logo : Locator = page.getByAltText("nopCommerce demo store");

    await expect(logo).toBeVisible();

     

    await expect(page.getByText("Welcome to our store")).toBeVisible();

    // await expect(page.getByText("Welcome to ")).toBeVisible();

    // await expect(page.getByText(/Welcome\s+ to \s+our\s store/i)).toBeVisible();


    await page.getByRole('link', { name: 'Register' }).click();

await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();



    await page.getByLabel('FirstName:').fill("John");
    await page.getByLabel('LastName:').fill("Doe");
   await page.getByLabel('Email:').fill("john.doe@example.com");


    await page.getByPlaceholder("Search Store").fill('Apple Macbook Pro');


    await expect(page.getByTitle("Home page link")).toHaveText("Home");

    await expect(page.getByTitle("Home page link")).toHaveText("Home");
await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");

// 7. page.getByTestId() : Locate an element based on its data-testid attribute (other attributes can be confi
// When to use: when text or role-based locators are unstable or not suitable.

await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
await expect(page.getByTestId("profile-name")).toHaveText("John Doe");

    

});