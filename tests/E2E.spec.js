const {test,expect} = require('@playwright/test');

test('End to end',async ({page})=>{

   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

   const emailID = "danton1@gmail.com";
   const password = "Danton@2710";
   const email = page.locator("#userEmail");
   const pwd = page.locator("#userPassword");
   const login = page.locator("#login");

   


   //Logging into the page

   await email.fill(emailID);
   await pwd.fill(password);
   await login.click();

   //await page.pause();

   //Fetch all the titles 

   const items = await page.locator("div.card-body");




   //Waiting for all the card to load on the page 
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 

   const size = await items.count();

   console.log(items);

   console.log(size);

   //Finding the required item 

   const requiredItem = "ZARA COAT 3";
   
   for(let i=0;i<size;i++){

    let text = await items.nth(i).locator("b").textContent();

    if(text === requiredItem){

        //Locating elements with the visible text
       await items.nth(i).locator("text=Add To Cart").click();

       break;


    }




   }
   const actualmsg = await page.locator("#toast-container").selectText();
   console.log(actualmsg);
   await expect(page.locator("#toast-container")).toHaveText("Product Added To Cart");

//await page.pause();



//Selecting the cart button

const cart = await page.locator("[routerlink='/dashboard/cart']");
cart.click();

//Waiting for all elements to lead

await page.locator("div li").nth(1).waitFor();

const itemTitle = await page.locator("h3:has-text('ZARA COAT 3')");

//Fetching the title shown in the cart page
const actualTitle = await itemTitle.innerText();

console.log(actualTitle);


//Asserting if the item name present in the cart is the same as we have selected
await expect(itemTitle).toHaveText(requiredItem);

//Clicking on checkout button

const checkout = await page.locator("text=Checkout");

await checkout.click();

//Finding the country Auto suggestive dropdown

const country = await page.locator("[placeholder*='Country']");

await country.pressSequentially("Ind");

const dropdown = await page.locator(".ta-results");

await dropdown.waitFor();

const count = await dropdown.locator("button").count();

console.log(count);

for(let i=0;i<count;i++){

    const actualValue = await dropdown.locator("button").nth(i).innerText();

    if( actualValue === " India"){

       await dropdown.locator("button").nth(i).click();
        break;
    }
}

const coupon = await page.locator("[name='coupon']");

await coupon.fill("rahulshettyacademy")

await page.locator("[type='submit']").click();

const couponText = await page.locator("div.field p").innerText();

await console.log(couponText);

await expect(couponText === "* Coupon Applied").toBeTruthy();

//await page.pause();

const placeOrderBtn = await page.locator("a.btnn");

await placeOrderBtn.click();

const thankyouMsg = await page.locator("h1.hero-primary").innerText();

await console.log(thankyouMsg);

await expect(thankyouMsg === "THANKYOU FOR THE ORDER.").toBeTruthy();

const orderNumber = await page.locator("label.ng-star-inserted").innerText();

const orderNumber1 = orderNumber.split("|")[1].trim();

console.log(orderNumber1);

const actualOrderTitle = await page.locator("div.title").first().innerText();

await console.log(actualOrderTitle);

await expect(actualOrderTitle === requiredItem).toBeTruthy();

await page.locator("td.em-spacer-1 label").first().click();

await page.locator("tbody tr th").first().waitFor();

const orderNumbers = await page.locator("tbody tr th");

const orderNumbersCount = await page.locator("tbody tr th").count();

await console.log(orderNumbersCount);

for(let i=0;i<orderNumbersCount;i++){

    const orderNumberActual = await orderNumbers.nth(i).innerText();

    await console.log(orderNumberActual);

    if(orderNumberActual === orderNumber1){

        await page.locator("tbody tr").nth(i).locator(".btn-primary").click();
        break;
    }
}

await page.locator(".col-text").waitFor();
const orderPageOrderNumber = await page.locator(".col-text").innerText();

console.log(orderPageOrderNumber);

await expect( orderPageOrderNumber === orderNumber1).toBeTruthy();

const billingAddress = await page.locator("div.row div.address").first();

const orderSummaryBillingEmail = await billingAddress.locator("p").first().innerText();

//await console.log(orderSummaryEmail);

const orderSummaryBillingCountry = await billingAddress.locator("p").last().innerText();

//await console.log(orderSummaryCountry);

const orderSummaryProductTitle = await page.locator("div.artwork-card-info div.title").innerText();

await console.log(orderSummaryProductTitle);

await expect(orderSummaryProductTitle === requiredItem).toBeTruthy();







}

)