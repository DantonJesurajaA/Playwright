const {test,expect} = require("@playwright/test");

test("Search for a product and add to cart", async({page})=>
{
await page.goto("https://ecommerce-playground.lambdatest.io/");
await page.locator("span.title",{hasText:'Mega Menu'}).hover();
await page.locator("[title='Desktop']").click();
await page.locator("div.carousel-item.active > img[title='Palm Treo Pro']").click();
await page.locator("#container button[title='Add to Cart']").click();
await page.locator("a.btn.btn-primary.btn-block",{hasText:'View Cart'}).click();
await expect(page.locator("td.text-left",{hasText:'Palm Treo Pro'})).toBeVisible();
await expect(page.locator("div[class$='flex-nowrap']>input")).toHaveValue("1");
}


)

test.only("Working on locators", async({page})=>{
const baseURL = "https://www.testmuai.com";
await page.goto(`${baseURL}/selenium-playground/simple-form-demo/`);
// await page.getByPlaceholder("Please enter your Message").fill("Hello World!");
// await page.getByRole("button",{name:'Get Checked Value'}).click();
// await expect(page.getByTestId("message")).toBeVisible();
// await expect(page.getByTestId("message")).toHaveText("Hello World!");
await page.getByPlaceholder("Please enter first value").fill("1");
await page.getByPlaceholder("Please enter second value").fill("2");
await page.getByRole("button",{name:'Get Sum'}).click();
await expect(page.locator("#addmessage")).toHaveText("3");
}



)