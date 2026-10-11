// SMOKE - SM-006 : Verify video content is displayed

import {test, expect} from '@playwright/test';
test('Veify video content is displayed', async({page})=>{
await page.goto('https://www.theelixrlabs.com/');
const video = page.getByAltText('Banner Video Thumbnail');
await expect(video).toBeVisible();
const newPagePromise = page.context().waitForEvent('page');
await video.scrollIntoViewIfNeeded();
await video.click();
const newPage = await newPagePromise;
await expect(newPage).toHaveURL('https://www.youtube.com/watch?v=hSW7F0iTEhw&feature=youtu.be&autoplay=0&fs=1');





}
);