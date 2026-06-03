// JS alert
// - cant able to inspect

// syntax
// page.on('dialog')

/* simple alert -> only button
confirm alert -> ok and cancel button
prompt alert -> text box

accept() -> click ok
dismiss() -> click cancel
accept('text') -> prompt alert

type() -> what type of alert  --> alert, confirm, prompt
message() -> returns the message to the alert */

import test from '@playwright/test'
import { type } from 'node:os'

test('js alerts', async({page}) => {
    await page.goto('https://letcode.in/alert')
    
    page.on('dialog', async(di) => {
        
        await page.waitForTimeout(2000)

        if(di.type() == 'alert') {
            console.log('Alert type : ', di.type())
            await page.waitForTimeout(2000)
            di.accept()
            await page.waitForTimeout(2000)
            console.log('Alert message : ', di.message())
        } else if (di.type() == 'confirm'){
            console.log('Alert type : ', di.type())
            await page.waitForTimeout(2000)
            di.accept()
            await page.waitForTimeout(2000)
            console.log('Alert message : ', di.message())
        } else if (di.type() == 'prompt'){
            console.log('Alert type : ', di.type())
            await page.waitForTimeout(2000)
            di.accept('Naveen raj')
            await page.waitForTimeout(2000)
            console.log('Alert message : ', di.message())
        } else {
            di.dismiss()
            console.log('Alert dismissed!')
        }
    })

    await page.locator('#accept').click()
    await page.waitForTimeout(2000)
    await page.locator('#confirm').click()
    await page.waitForTimeout(2000)
    await page.locator('#prompt').click()
    await page.waitForTimeout(2000)
    
}
)

// test('Handling JS alerts',async({page})=>{
//     await page.goto('https://demoqa.com/alerts');
//     page.on('dialog',async(di)=>{
//         //di.accept();
//         // di.dismiss();
//         if(di.type()=='alert'){
//             di.accept();
//         }
//         else if (di.type()=='confirm'){
//             di.accept();
//             console.log('accepted');
//         }
//         else if(di.type()=='prompt'){
            
//             di.accept('Ganesh');
            
//             console.log('Prompt Accepted');
//         }
//         else{
//             di.dismiss();
//             console.log('Dismissed');
//         }
//         console.log(di.type());
//         const message = di.message();
//         console.log(message)
//         });
//     //await page.locator('#alertButton').click();

//     //await page.locator('#confirmButton').click();

//     await page.locator('#promtButton').click();
//     await page.waitForTimeout(3000)

// })

