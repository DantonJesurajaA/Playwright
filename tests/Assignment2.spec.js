const {test,expect} = require('@playwright/test');

 const baseUrl ="https://eventhub.rahulshettyacademy.com";
    const username = "danton1@gmail.com";
    const password = "Danton@2710";


async function login(page){

   
    await page.goto(`${baseUrl}/login`);

   await page.getByLabel('Email').fill(username);
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button',{name:'Sign In'}).click();


    
}

async function futureDateValue(){

    let futureDate = new Date();
    //console.log(futureDate);
    futureDate.setDate(futureDate.getDate()+7);
    //console.log(futureDate);
    //futureDate=futureDate.toString().slice(0,16);
    //console.log(futureDate);
    //let Day = futureDate.getDate
    let day = futureDate.getDate();
    let month = futureDate.getMonth()+1;
    let year = futureDate.getFullYear();  
    let hours = futureDate.getHours();
    let mins = futureDate.getMinutes();
    let meridian ='';
    if(hours>12){
         meridian = 'PM';
    }
    else{
         meridian = 'AM';
    }
    if(month<10){
        month =`0${month}`;
    }
    if(day<10){
        day = `0${day}`;
    }
    if(hours<10){
        hours=`0${hours}`;
    }
    if(mins<10){
        mins=`0${mins}`;
    }
    //console.log(futureDate);

    let formattedDate = `${year}-${month}-${day}T${hours}:${mins}`;

    //console.log(formattedDate);
    return formattedDate;
    //return futureDate;
}


test('Full Booking Flow with Event Creation', async ({page})=>{

  // await register(page);
    await login(page);

    await page.getByRole('button',{name:'Admin'}).click();
    await page.locator("div.absolute a.flex").filter({hasText:'Manage Events'}).click();

    const title = `Test Event ${Date.now()}`;
    //await console.log(title);
    const seats = '50';
  // console.log(typeof(title));
  await page.locator("#event-title-input").fill(title);
  await page.getByPlaceholder("Describe the event…").fill("Test Description");
  await page.getByLabel('City').fill("Thoothukudi");
   await page.getByLabel('Venue').fill("Home");
   let date = ((await futureDateValue()));
  await page.getByLabel('Event Date & Time').fill(date);
  await page.getByLabel("Price ($)").fill('100');
  await page.getByLabel("Total Seats").fill(seats);
  await page.locator('#add-event-btn').click();
  let toast = await page.getByText("Event Created!");
  await expect(toast).toBeVisible(); 

  //console.log(date);
  //console.log(typeof (date));

  //Navigating to the events page

  await page.getByTestId("nav-events").click();
  await expect(page.locator("article#event-card").first()).toBeVisible();
  await expect(page.locator("article#event-card").filter({hasText:title})  ).toBeVisible();
  let seatsBeforeBooking = await page.locator("article#event-card").filter({hasText:title}).locator("span.text-xs").last().innerText();
  //await console.log(seatsBeforeBooking);  
  let noOfSeatsBeforeBooking = await seatsBeforeBooking.split(" ")[0].trim();
  //await console.log(noOfSeatsBeforeBooking);
  expect(noOfSeatsBeforeBooking === seats).toBeTruthy();
  //Clicking on book now button on required card
 await page.locator("article#event-card").filter({hasText:title}).getByTestId("book-now-btn").click();
 await page.locator("#ticket-count").waitFor();
 let ticketCount = await page.locator("#ticket-count").innerText();
 //await console.log(ticketCount);
 await expect(ticketCount == '1').toBeTruthy();
 await page.getByLabel("Full Name").fill("Maria Nevis Danton Jesuraja");
 await page.locator("#customer-email").fill("danton1@gmail.com");
 await page.getByPlaceholder("+91 98765 43210").fill("7200400604");
 await page.locator(".confirm-booking-btn").click();
 await expect(page.locator(".booking-ref")).toBeVisible();
 let bookingRef = await page.locator(".booking-ref").innerText();
 //await console.log(bookingRef);
 await page.locator("#nav-bookings").click();

await expect(page.locator("#booking-card").first()).toBeVisible();
 let currentUrl = await page.url();
 //await console.log(currentUrl);
 expect(currentUrl === `${baseUrl}/bookings`).toBeTruthy();
 expect(page.locator("#booking-card").first()).toBeVisible();
 let reqCard = await page.locator("#booking-card").filter({hasText:bookingRef});
 await expect(reqCard).toBeVisible();
 await expect(reqCard.locator("h3")).toHaveText(title);

 //Navigate back to events

 await page.goto(`${baseUrl}/events`);
 await expect(page.locator("article#event-card").first()).toBeVisible();
 await expect(page.locator("article#event-card").filter({hasText:title})  ).toBeVisible();
let seatsAfterBooking = await page.locator("article#event-card").filter({hasText:title}).locator("span.text-xs").last().innerText();
await console.log(seatsAfterBooking);
let noOfSeatsAfterBooking = await seatsAfterBooking.split(" ")[0].trim();
await console.log(noOfSeatsAfterBooking);
await console.log(noOfSeatsBeforeBooking);
await expect(parseInt(seatsAfterBooking)).toBe(parseInt(noOfSeatsBeforeBooking)-1);

}




)