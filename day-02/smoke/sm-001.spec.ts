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
console.log('Test Case PASSED');

}
);

