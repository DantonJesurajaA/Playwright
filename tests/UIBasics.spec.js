const {test,expect} = require ('@playwright/test');
//import { format } from 'date-fns';
const { format } = require('date-fns');

//test('Firsttest', async function(){}) - This is one way to declare an anonymous function

test('First test', async ({browser})=>{ //This is another way to declare anonymous function

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

test('Dropdown and Radio', async ({page})=>{

 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

 const dropdown = page.locator("select.form-control");

 const radioLast = page.locator("span.checkmark").last();

 const okaybtn = page.locator("#okayBtn");

 const blinkingUI = page.locator("a.blinkingText").first();

 await dropdown.selectOption("Teacher");

 await radioLast.click();

 await okaybtn.click();

 await expect(radioLast).toBeChecked();

 console.log(await radioLast.isChecked());

 //await page.pause();

 //To verify if the page has a blinking UI element

 
await expect(blinkingUI).toHaveAttribute("class", "blinkingText");


}







)


test('Child window Handling', async ({browser})=>{

 const context = await browser.newContext();
 
 const page = await context.newPage();

 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

 const documentPage = page.locator("a.blinkingText").first();   
 
 const [newPage] = await Promise.all([

 context.waitForEvent('page'), //Listen for any new page to be opened

 documentPage.click()

 ] // New page is opened
)

console.log(await newPage.locator(".red").innerText());

const line = await newPage.locator(".red").innerText();

let terms = line.split("@");

let username = terms[1].split(" ")[0];

console.log(username);

await page.locator("#username").fill(username);

console.log(await page.locator("#username").inputValue());

}



)

test.only('Sample Test', async ()=>
{

   

const now = new Date();

// Standard custom format
console.log(format(now, 'yyyy-MM-dd HH:mm:ss'));
// Output: "2026-08-31 19:05:00"

// Long, readable format
console.log(format(now, 'PPPPpppp'));
// Output: "Monday, August 31st, 2026 at 7:05:00 PM GMT+5"
}


)