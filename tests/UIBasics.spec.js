const {test,expect} = require ('@playwright/test');

//test('Firsttest', async function(){}) - This is one way to declare an anonymous function

test.only('First test', async ({browser})=>{ //This is another way to declare anonymous function

   // await console.log("First test");

   const context = await browser.newContext();
   const page = await context.newPage(); 
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   // await context.close();

    //await browser.close();

    await page.locator("#username").fill("danton");

    await page.locator("[name='password']").fill("123");

    let error = await page.locator("[style*='display']").textContent();

    console.log(error);

    //Asserting whether the error contains the appropriate text

    await expect(page.locator("[style*='display']")).toContainText(error);


    let details = await page.locator("p.text-center").innerText();

   await console.log(details);

   let arr = await details.split(" ");

   let username = arr[2];

   let password = arr[6];

   let password1 = password.slice(0,password.length-1);

   await console.log(username);

   await console.log(password1);

    await page.locator("#username").fill(username);

    await page.locator("[name='password']").fill(password1);

    await page.locator("#signInBtn").click();

    console.log(await page.locator(".card-body a").first().innerText());

    console.log(await page.locator(".card-body a").nth(1).innerText() );

}


)

test('Second Test', async ({page})=>
{

    await page.goto("https://www.google.com");

    //Get the title and assert if it is correct

    console.log(await page.title());

    await expect(page).toHaveTitle("Google");

    await expect(page).toHaveURL("https://www.google.com");


}


)