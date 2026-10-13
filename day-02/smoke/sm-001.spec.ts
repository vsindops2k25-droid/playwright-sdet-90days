// SMOKE SM-001 - Verify exlir app launches successfully

import {test, expect} from '@playwright/test';
test('SM-001 - verify elixr app launches successfully', async({page}) => {
// Navigate to Elixr
await page.goto('https://www.theelixrlabs.com/');
// Get actual URL
const url = page.url();
// printig the actual URL
console.log('Actual URL', url);
//validate URL
await expect(page).toHaveURL('https://www.theelixrlabs.com/');
// Get actual page title
const title = await page.title();
// printing the actual pag title
console.log('Actual Title', title);
// validate the page title
await expect(page).toHaveTitle('Elixr');
// Verify the LOGO
const img = page.getByRole('img', { name : 'Logo', exact : true});
await expect(img).toHaveCount(1);
await expect(img).toBeVisible();
const imgSrc = await img.getAttribute('src');

const box = await img.boundingBox();
console.log('Logo box:', box);
expect(box!.width).toBeGreaterThan(0);
expect(box!.height).toBeGreaterThan(0);

await expect(img).toHaveAttribute('alt', 'Logo');
await expect(img).toHaveAttribute('src', /elixr_logo\.svg$/);
await expect.poll (() => 
img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);

console.log('The Image Source is:', imgSrc);

const loaded = await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0);
expect(loaded).toBe(true);
console.log ('Image Loaded: ', loaded);

const response = await page.request.get(new URL(imgSrc!, page.url()).toString());
expect(response.status()).toBe(200);
expect(response.headers()['content-type']).toContain('svg');


}
);

