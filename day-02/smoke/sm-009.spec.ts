// SMOKE - SM-009 : To verify the Contat Us from 

import {test, expect} from '@playwright/test'
test('Verify Contact Us section is displayed', async({page}) => {
await page.goto('https://www.theelixrlabs.com/');
const contactSection = page.getByRole('heading', { name : 'Contact Us', exact:true});
 const contactSectionLabelcount = await contactSection.count();
 console.log('The Contact Us count is: ', contactSectionLabelcount);

for (let i = 0; i<contactSectionLabelcount; i++) {
    console.log(`Element ${i}:`, 
        await contactSection.nth(i).evaluate(el => ({
            tag : el.tagName,
            text: el.textContent.trim(),
            visible : !!(el as HTMLElement).offsetParent,
            outerHTML : el.outerHTML

        }))
    )
}
await expect(contactSection).toBeVisible();
await expect(contactSection).toHaveText('Contact Us');

// Text fields verification 
// Full Name field verification

const fullName = page.getByRole('textbox', { name : 'Full Name *', exact: true })
//const fullName = page.getByPlaceholder('text');
const fullNameTextcount = await fullName.count();
console.log('The full name count is: ', fullNameTextcount);
for (let i =0; i<fullNameTextcount; i++){
    console.log (`Element ${i}:`, 
        await fullName.nth(i).evaluate(el => ({

              tag: el.tagName,
              text : el.textContent.trim(),
              visible : !!(el as HTMLElement).offsetParent,
              outerHTML: el.outerHTML
    
        })
    )
)
}
await expect(fullName).toBeVisible();
await expect(fullName).toHaveAttribute('placeholder', 'Full Name *');

// Email field verification

const email = page.getByRole('textbox', { name : 'Email Address *', exact : true});
const emailTextcount = await email.count();
console.log('The email Text Count is:', emailTextcount);
for(let i =0; i<emailTextcount; i++){
    console.log(`Element ${i} :`,
        await email.nth(i).evaluate(el => ({
        tag: el.tagName,
        text: el.textContent.trim(),
        visible: !!(el as HTMLElement).offsetParent,
        outerHTML: el.outerHTML
    }))
)
}

await expect(email).toBeVisible();
await expect(email).toHaveAttribute('placeholder', 'Email Address *');

// Message field

const message = page.getByRole('textbox', { name : 'Message *', exact: true});
const messageTextCount = await message.count();
console.log('The Message placeholder text count is:', messageTextCount);
for(let i=0; i<messageTextCount; i++){
   console.log(`Element ${i}:`, 
    await message.nth(i).evaluate(el => ({
          tag : el.tagName,
          text : el.textContent.trim(),
          visible : !!(el as HTMLElement).offsetParent,
          outerHTML: el.outerHTML

    }))
   )
}

await expect(message).toBeVisible();
await expect(message).toHaveAttribute('placeholder', 'Message *');

// Verify the Submit button

const submitButton = page.getByRole('button', { name : 'Submit', exact: true});
const submitBtnCount = await submitButton.count();
console.log('The Submit Button count is: ', submitBtnCount);
for (let i =0; i<submitBtnCount; i++) {
    console.log(`Element ${i}:`,
       await submitButton.nth(i).evaluate(ei => ({
               tag : ei.tagName,
               text : ei.textContent.trim(),
               visible: !!(ei as HTMLElement).offsetParent,
               outerHTML: ei.outerHTML

         })
        )

    )
}

await expect(submitButton).toBeVisible();
await expect(submitButton).toBeEnabled();

// privacy checkbox

const form = page.locator('#contactUs');
const privacyCBox = form.getByLabel('I understand that my data will be held securely in accordance with the');
const label = form.locator('label[for="privacyPolicy"]');
const privacyCBoxCount = await privacyCBox.count();
console.log('The number of labels: ', privacyCBoxCount);
for(let i =0; i<privacyCBoxCount; i++){
    console.log(`Element ${i}`, 
        await privacyCBox.nth(i).evaluate(el => ({
              tag: el.tagName,
              text : el.textContent.trim(),
              visible: !!(el as HTMLElement).offsetParent,
              outerHTML: el.outerHTML

        }))
    )

}

await expect(privacyCBox).toBeVisible();
await expect(label).toContainText('I understand that my data will be held securely in accordance with the');
console.log('The Label Text is:', await label.textContent());
} )





 



