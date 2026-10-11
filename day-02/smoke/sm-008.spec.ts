    // SMOKE - SM-008 : Verify Get In Touch section is displayed

    import { test, expect} from '@playwright/test';
    test('Verify Get In Touch section is displayed', async({page})=>{
    await page.goto('https://www.theelixrlabs.com/');
    const getInTouchpillLabel = page.locator('#contact-us h1.uppercase');
    const secCount = await getInTouchpillLabel.count();
    console.log("The Total Count is :", secCount);
    for (let i =0; i<secCount; i++) {
        console.log(`Element ${i} :`, 
            await getInTouchpillLabel.nth(i).evaluate(el => ({
                tag : el.tagName,
                text : el.textContent.trim(),
                visible: !!(el as HTMLElement).offsetParent,
                outerHTML: el.outerHTML

            })
        )
        )
    } 

    await expect(getInTouchpillLabel).toBeVisible();
    await expect(getInTouchpillLabel).toHaveText('Get in Touch');

    const getInTouchmainTitle = page.locator('#contact-us h1:not(.uppercase)');
    const headingcount = await getInTouchmainTitle.count();
    console.log("The Total Count is :", headingcount);
    for (let i =0; i<headingcount; i++) {
        console.log(`Element ${i} :`, 
            await getInTouchmainTitle.nth(i).evaluate(el => ({
                tag : el.tagName,
                text : el.textContent.trim(),
                visible: !!(el as HTMLElement).offsetParent,
                outerHTML: el.outerHTML

            })
        )
        )
    } 
    await expect(getInTouchmainTitle).toBeVisible();
    await expect(getInTouchmainTitle).toHaveText('Get in Touch');

 const headQtr = page.getByRole('heading', { name : 'Our Headquarters'});
 await expect(headQtr).toBeVisible();
 await expect(headQtr).toHaveText('Our Headquarters');

 const phoneLabel = page.getByRole('heading', { name : 'Feel free to get in touch?'});
 await expect(phoneLabel).toBeVisible();
 await expect(phoneLabel).toHaveText('Feel free to get in touch?');

 const emailLable = page.getByRole('heading', { name: 'Feel free to get in touch?'});
 await expect(emailLable).toBeVisible();
 await expect(emailLable).toHaveText('Feel free to get in touch?');


/*const contactSection = page.locator('#contact-us');
1. Whole text of the section, as a user sees it
console.log(await contactSection.innerText());
const headings = await contactSection.getByRole('heading').allInnerTexts();
console.log('Heading count:', headings.length);
console.log(headings); */

    });