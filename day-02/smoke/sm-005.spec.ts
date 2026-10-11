
// SMOKE - SM -005 - Verfy products section is displayed

import {test, expect} from '@playwright/test';
test ('Verfy products section is displayed', async({page})=> {
await page.goto('https://www.theelixrlabs.com/');
const prodSectionLabel = page.getByRole('heading', { name:'Our Products' });
await expect(prodSectionLabel).toBeVisible();
const prodLabelText = await prodSectionLabel.textContent();
console.log('The Section Header is:', prodLabelText);
const prodTabsContainer = page.locator('div.flex.border-b.mb-12');
const tabs = prodTabsContainer.getByRole('button');
const tabsCount = await tabs.count();
console.log('The total number of tabs:', tabsCount);
for (let i =0; i<tabsCount; i++) {
    const tab = tabs.nth(i);
    await expect(tab).toBeVisible();
    const tabName = await tab.innerText();
    console.log('The current tab is:', tabName);
    await tab.click();
    await page.waitForTimeout(4000);
    const tabTitle =  page.getByRole('heading', {name : tabName});

}

} 
);