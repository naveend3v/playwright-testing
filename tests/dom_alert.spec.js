// DOM Alert

/* 
we can inspect
we locate and interact with Element
we use try catch block for catching exception
*/

import test from '@playwright/test';

// test('Checking DOM based POPUP',async({page})=>{
//  await page.goto('https://www.flipkart.com/');
 
//  try{
//     await page.waitForSelector('.b3wTlE',{timeout: 5000})
//     await page.locator('.b3wTlE').click();
//     console.log('Popup closed');
//  }
//  catch{
//     console.log('Popup not appeared');
//  }

// })


test('dom alerts', async({page}) => {
    await page.goto('https://www.flipkart.com/')
    try {
        await page.waitForSelector('//input[contains(@class,"xkp9Hl")]')    
        console.log('pop up found')
        await page.waitForTimeout(2000)
        await page.locator('//input[contains(@class,"xkp9Hl")]').fill('9578462510')
        console.log('phone number entered')
        await page.waitForTimeout(2000)
        // await page.locator('[data-cy="continueBtn"]').click()        
    } catch {
        console.log('pop up not found!')
    }
}
)