// SMOKE : sm-002 - verify the main banner is displayed on the home page

import {test,expect} from '@playwright/test';
test('SM-002 - Verify the main banner is displayed on the home page', async({page}) => {
await page.goto('https://www.theelixrlabs.com/');
// locate the banner
const banner = page.getByAltText('Banner 1');
// print banner image source
console.log(await banner.getAttribute('src'));
// Verify Banner is visible
await expect(banner).toBeVisible();

}
);

