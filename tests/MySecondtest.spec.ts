import{test,expect} from  "@playwright/test";
import { url } from "node:inspector";

test("Verify page URL",async({page})=>{
   await page.goto("https://sparklecartonline.com/");
    let URL:string = await page.url();
    console.log("URL:", URL);

  await expect(page).toHaveURL(/sparklecartonline/);
})
