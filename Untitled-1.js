import {test,expect} from '@playwright/test'

test('handling table',async({page})=>{
    await page.goto('https://demoqa.com/webtables');
    const rows = await page.locator('table tbody tr');
    // for(let i=0; i<await rows.count();i++){
    //     const col = await rows.nth(i).locator('td')
    //     for(let j=0;j<await col.count();j++){
    //         // const text = await col.nth(j).textContent();
    //         // const text = await col.nth(j).allInnerTexts();
    //         const text = await col.nth(j).innerText();
    //         console.log(text);
    //     }
    // }
    for(let i=0; i<await rows.count();i++){
        const row =await rows.nth(i)
       const text =await row.textContent();
        console.log(text);
        if(text.includes('Insurance')){
            await row.locator('[title="Delete"]').click();
            
        }
    }
    await page.waitForTimeout(4000)

    await expect(page).toHaveURL('https://demoqa.com/webtables')
    await expect(page).toHaveTitle('demosite')
})