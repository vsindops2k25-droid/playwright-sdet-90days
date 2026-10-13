import { test, expect } from '@playwright/test';
test ('Verify the top navigation menu items', async ({ page}) => {
await page.goto ('https://www.theelixrlabs.com/');

// To verify the navigation bar if there is exist any
const navigationBar =  page.getByRole('navigation');
console.log('The Count is:', await navigationBar.count());
console.log(await navigationBar.evaluate(el => el.outerHTML ));

const topBar = page.locator('div.fixed').filter({
    has: page.getByRole('img', { name : 'Logo', exact : true}),
});

console.log('Top tab bar count:', await topBar.count());
await expect(topBar).toBeVisible();

const whoAreWe = topBar.locator('div.relative.group').filter({ hasText : 'Who are we'});
await expect(whoAreWe.getByText('Who are we', {exact : true})).toBeVisible();

const vision  = whoAreWe.getByRole('link', { name: 'Our Vision' });
const mission = whoAreWe.getByRole('link', { name: 'Our Mission' });
const history = whoAreWe.getByRole('link', { name: 'Our History' });

// hidden before over

await expect(vision).toBeHidden();

// open dropdown

await whoAreWe.hover();

// visible after hover

await expect(vision).toBeVisible();
await expect(mission).toBeVisible();
await expect(history).toBeVisible();

// hrefs

await expect(vision).toHaveAttribute('href', '/Vision');
await expect(mission).toHaveAttribute('href', '/Vision#OurMission');
await expect(history).toHaveAttribute('href', '/Vision#OurHistory');


const links = [
    { name : 'Blogs', href : '/Blog'},
    { name : 'News', href : '/News'},
    { name : 'Careers', href : 'https://recruitment.theelixrlabs.com/jobs/Careers'},
    { name : 'Contact Us', href : '/#contact-us'}
];

for (const {name, href} of links) {
    const link = topBar.getByRole('link', {name, exact : true});
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', href);

}











});