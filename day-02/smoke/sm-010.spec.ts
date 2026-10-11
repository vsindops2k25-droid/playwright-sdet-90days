import {test, expect} from '@playwright/test';

test('Verify the Footer section', async({page}) => {
await page.goto('https://www.theelixrlabs.com/');
const footerSection = page.locator('footer');
const elixrFooterLogo = footerSection.getByRole('img', {name : 'Footer Logo'});
const footerLogoCount = await elixrFooterLogo.count();
console.log('The Logo Count is :', footerLogoCount);
for (let i=0; i<footerLogoCount; i++) {
    console.log(`Element ${i}:`, 
        await elixrFooterLogo.nth(i).evaluate(el => ({
             tag: el.tagName,
             text : el.textContent.trim(),
             visible: !!(el as HTMLElement).offsetParent,
             outerHTML : el.outerHTML

        }))
    )
}
await expect(elixrFooterLogo).toBeVisible();

// Contact Us label
const contactUsheading = footerSection.getByRole('heading', { name : 'CONTACT US'});
const contactUsheadingCount = await contactUsheading.count();
console.log('The Contact Us section heading count is: ', contactUsheadingCount);
for (let i =0; i<contactUsheadingCount; i++){
    console.log(`Element {i} :`,
        await contactUsheading.nth(i).evaluate(el => ({
            tag: el.tagName,
            text: el.textContent.trim(),
            visible: !!(el as HTMLElement).offsetParent,
            outerHTML: el.outerHTML           

        }))

    )
}

await expect(contactUsheading).toBeVisible();
await expect(contactUsheading).toHaveText('CONTACT US');

// Let’s make something great work together section validation 

const rightSecHeading = footerSection.getByRole('heading', { name : 'Let’s make something great work together.'});
const rightSecHeadingCont = await rightSecHeading.count();
console.log('THe Count is', rightSecHeadingCont);
for (let i =0; i<rightSecHeadingCont; i++){
    console.log(`Element {i} :`,
        await rightSecHeading.nth(i).evaluate(el => ({
            tag: el.tagName,
            text: el.textContent.trim(),
            visible: !!(el as HTMLElement).offsetParent,
            outerHTML: el.outerHTML           

        }))

    )
}
await expect(rightSecHeading).toBeVisible();
await expect(rightSecHeading).toHaveText("Let’s make something great work together.");

// WHO ARE WE Section

const whoWeAreSection = footerSection.getByRole('heading', { name : 'Who Are We'});
const whoWeAreSectionCount = await whoWeAreSection.count();
console.log('THe Count is', whoWeAreSectionCount);
for (let i =0; i<whoWeAreSectionCount; i++){
    console.log(`Element ${i} :`,
        await whoWeAreSection.nth(i).evaluate(el => ({
            tag: el.tagName,
            text: el.textContent.trim(),
            visible: !!(el as HTMLElement).offsetParent,
            outerHTML: el.outerHTML           

        })) 
    )
}
await expect(whoWeAreSection).toBeVisible();
await expect(whoWeAreSection).toHaveText('Who Are We');
await expect(footerSection.getByRole('link', { name : 'Our Vision'})).toBeVisible();
await expect(footerSection.getByRole('link', { name : 'Our Mission'})).toBeVisible();
await expect(footerSection.getByRole('link', { name : 'Our History'})).toBeVisible();

});


