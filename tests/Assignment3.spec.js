const {test,expect} = require('@playwright/test');

 const baseUrl ="https://eventhub.rahulshettyacademy.com";
    const username = "danton1@gmail.com";
    const password = "Danton@2710";


async function login(page){

   
    await page.goto(`${baseUrl}/login`);

    await page.getByLabel('Email').fill(username);
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button',{name:'Sign In'}).click();
    await expect(page.locator("div.flex span.items-center")).toBeVisible();


    
}


test('Single ticket booking is eligible for refund', async ({page})=>{

  // await register(page);
    await login(page);
    await page.goto(`${baseUrl}/events`);

    //Clicking on the book now button of the first event
    await page.getByTestId("event-card").last().getByTestId("book-now-btn").click();

    //Filling details and clicking on confirm booking

    await page.getByLabel("Full Name").fill("Maria Nevis Danton Jesuraja");
    await page.locator("#customer-email").fill("danton1@gmail.com");
    await page.getByPlaceholder("+91 98765 43210").fill("7200400604");
    await page.locator(".confirm-booking-btn").click();

    //Navigating to my bookings

    await page.getByTestId("nav-bookings").click();
    await expect(page.locator("#booking-card").first()).toBeVisible();
    let currenturl = await page.url();
    await expect(currenturl === `${baseUrl}/bookings`).toBeTruthy();
    await page.locator("#booking-card").first().getByRole('button',{name:'View Details'}).click();
    await expect(page.locator(".space-y-4")).toBeVisible();
    await expect(page.locator("div.flex span.font-mono").last()).toBeVisible();
    let bookingRefId = await page.locator("div.flex span.font-mono").first().textContent();
    let eventTitle = await page.locator("h1.text-2xl").innerText();
    //console.log(bookingRefId);
    //console.log(eventTitle);
    expect(bookingRefId[0] === eventTitle[0]).toBeTruthy();
    
    //Click on check refund eligibility button
    await page.getByRole('button',{name:'Check eligibility for refund?'}).click()
    await expect(page.locator("#refund-spinner")).toBeVisible({timeout: 50});
    await expect(page.locator("#refund-spinner")).toBeHidden({timeout : 6000});

    //Locating result and asserting it

    await expect(page.locator("#refund-result")).toBeVisible();
    await expect(page.locator("#refund-result")).toHaveText("Eligible for refund. Single-ticket bookings qualify for a full refund.");
    //await expect(page.locator("#refund-result")).toHaveText("Single-ticket bookings qualify for a full refund.");
    

}
)

test.only('Group ticket booking is NOT eligible for refund', async ({page})=>{

    await login(page);

    await page.goto(`${baseUrl}/events`);

    //Clicking on the book now button of the first event
    await page.getByTestId("event-card").last().getByTestId("book-now-btn").click();

    //Increasing number of quantities

    await page.getByRole('button',{name:'+'}).click();
    await page.getByRole('button',{name:'+'}).click();

    //Filling details and clicking on confirm booking

    await page.getByLabel("Full Name").fill("Maria Nevis Danton Jesuraja");
    await page.locator("#customer-email").fill("danton1@gmail.com");
    await page.getByPlaceholder("+91 98765 43210").fill("7200400604");
    await page.locator(".confirm-booking-btn").click();

     await page.getByTestId("nav-bookings").click();
    await expect(page.locator("#booking-card").first()).toBeVisible();
    let currenturl = await page.url();
    await expect(currenturl === `${baseUrl}/bookings`).toBeTruthy();
    await page.locator("#booking-card").first().getByRole('button',{name:'View Details'}).click();
    await expect(page.locator(".space-y-4")).toBeVisible();
    await expect(page.locator("div.flex span.font-mono").last()).toBeVisible();
    let bookingRefId = await page.locator("div.flex span.font-mono").first().textContent();
    let eventTitle = await page.locator("h1.text-2xl").innerText();
    //console.log(bookingRefId);
    //console.log(eventTitle);
    expect(bookingRefId[0] === eventTitle[0]).toBeTruthy();
    
    //Click on check refund eligibility button
    await page.getByRole('button',{name:'Check eligibility for refund?'}).click()
    await expect(page.locator("#refund-spinner")).toBeVisible({timeout: 50});
    await expect(page.locator("#refund-spinner")).toBeHidden({timeout : 6000});

    //Locating result and asserting it
    await expect(page.locator("#refund-result")).toBeVisible();
    await expect(page.locator("#refund-result")).toContainText("Not eligible for refund."); 
    await expect(page.locator("#refund-result")).toContainText("Group bookings (3 tickets) are non-refundable.");
    
}


)