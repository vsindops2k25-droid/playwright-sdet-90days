// SMOKE - SM-004 : Verify users navigate to each services section successfully

import {test, expect} from '@playwright/test';
test('Verify users navigate to each services section successfully', async({page}) => {
await page.goto('https://www.theelixrlabs.com/');

// verify 'Services' section header is present

const servicesHeader = page.getByRole('heading', {name: 'Our Services'});
await expect(servicesHeader).toBeVisible();

// verify Cloud Infrastrcture Management section is present

const serv1 = page.getByRole('button', {name: 'Cloud Infrastructure Management'});
await expect(serv1).toBeVisible();
await serv1.click();
const sechead = page.getByRole('heading', {name: 'Cloud Infrastructure Management'} );
await expect(sechead).toBeVisible();

//.................. //
const servicesNav = page.locator('nav').filter({
    has: page.getByRole('button', { name: 'Cloud Infrastructure Management' },)
});
const servcount = await servicesNav.count();
console.log(servcount);

const servicesButtons = servicesNav.getByRole('button');
const serbtncount = await servicesButtons.count();
console.log(serbtncount);


for (let i=0; i<serbtncount; i++) {
    const serviceButton = servicesButtons.nth(i);
    const serviceName = await serviceButton.innerText();
    await serviceButton.click();
    await page.waitForTimeout(1000);
    const serviceHeading = page.getByRole('heading', { name: serviceName});
    console.log(serviceName);
    await expect(serviceHeading).toBeVisible();
}

});
