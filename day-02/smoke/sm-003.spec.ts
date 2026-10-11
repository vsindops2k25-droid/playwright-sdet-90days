// SMOKE - SM-003 - Verify Book a Demo link navigates to booking page

import {test, expect} from '@playwright/test'
test ('Verify Book a Demo link naviates to booking page', async({page})=>{
await page.goto('https://www.theelixrlabs.com/');
const url = page.url();
console.log('The URL entered is:', url);
await expect(page).toHaveURL('https://www.theelixrlabs.com/');
const bookDemo = page.getByRole('link', {name: 'Book a Demo'});
const count = await bookDemo.count();
console.log('The link text is:', 'Book a Demo');
console.log('The number of appearances of Book a Demo is:', count);
for (let i =0; i<count; i++) {
    const link = bookDemo.nth(i);
   const href =  await link.getAttribute('href');
   expect(href).toBe("https://outlook.office.com/owa/calendar/ElixrLabsTechnologiesPrivateLimited@theelixrlabs.com/bookings/")
   console.log(href);
}
const firstBookDemo = bookDemo.first();
const newPagePromise = page.context().waitForEvent('page');
await firstBookDemo.click();
const newPage = await newPagePromise;
await expect(newPage).toHaveURL('https://bookings.cloud.microsoft/book/ElixrLabsTechnologiesPrivateLimited@theelixrlabs.com/?ismsaljsauthenabled=true');


});
