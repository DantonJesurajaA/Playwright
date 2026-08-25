const {test,expect} = require('@playwright/test');

//This is the first assignment 

test('Assignment',  async ({ page }) => {

    const baseurl = "https://rahulshettyacademy.com/client/#/auth/login";
    await page.goto(baseurl);

    //Page locators later to be moved into pageFactory/ POM framework
    const email = await page.locator("[type='email']");
    const password = await page.locator("[type='password']");
    const login = await page.locator("[name='login']");

    //Accessing the credentials and logging in
    await email.fill("danton1@gmail.com");
    await password.fill("Danton@2710");
    await login.click();

    //Waiting for all the contents to be loaded

    await page.waitForLoadState('networkidle')

    //Getting all the titles in the page

    console.log(await page.locator("div.card-body b").first().innerText());


}








)

test('Registration',  async ({ page }) => {

    const baseurl = "https://rahulshettyacademy.com/client/#/auth/login";
    await page.goto(baseurl);

    //Page locators in register page
    const register = await page.locator(".text-reset");
    const firstName = await page.locator("[type='firstname']");
    const lastName = await page.locator("#lastName");
    const emailID = await page.locator("#userEmail");
    const ph = await page.locator("#userMobile");
    const occupationDD = await page.locator("[formcontrolname='occupation']");
    const pwd = await page.locator("#userPassword");
    const cfmpwd = await page.locator("#confirmPassword");
    const login = await page.locator("#login");
    const chkbox = await page.locator("[type='checkbox']");


    //Registering a user

    await register.click();
    await firstName.fill("Danton");
    await lastName.fill("Jesuraja");
    await emailID.fill("danton2@gmail.com");
    await ph.fill("1234567890");
    await pwd.fill("Danton@2710");
    await cfmpwd.fill("Danton@2710");
    await chkbox.click();
    await login.click();

}



)