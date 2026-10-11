// SMOKE - SM-07 : Verify Our Locations section is displayed

import { test, expect} from '@playwright/test';
test('Verify Our Locations Section is displayed', async({page})=>{
await page.goto('https://www.theelixrlabs.com/');
const ourLocationsSection = page.getByRole('heading', { name: 'Our Locations'});
await ourLocationsSection.scrollIntoViewIfNeeded();
await expect(ourLocationsSection).toBeVisible();
const labelText = await ourLocationsSection.textContent();
console.log('The Label name is :', labelText);
const country = page.getByRole('heading', {name: 'India'});
await expect(country).toBeVisible();
const countryLabelText = await country.textContent();
console.log('The Country Label is:', countryLabelText);
const countrySection = country.locator('..').locator('..');
const cities = countrySection.getByRole('heading', { level: 3});
const citiesCount = await cities.count();
console.log('The total number of cities in India are:', citiesCount);
for (let i=0 ; i<citiesCount; i++) {
    const city = cities.nth(i);
    const cityCard = city.locator('..').locator('..');
    await expect(cityCard).toBeVisible();
    const cityDetails = await cityCard.innerText();
    console.log('City Details:', cityDetails);


}


});