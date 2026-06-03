import {chromium, test} from '@playwright/test';

test('Browser handling',async({browser})=>{
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto('https://www.flipkart.com/')
    await page1.locator('(//div//input[@title="Search for Products, Brands and More"])[1]').fill('laptop')
    await page1.keyboard.press('Enter');
    
    const [newtab] = await Promise.all([
    page1.waitForEvent('page'),
    page1.locator('//div[contains(text(),"MT8781")]').click()
    ])
    await newtab.waitForLoadState();
    console.log(await newtab.title());
})