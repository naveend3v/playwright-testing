// input field

import {test, expect} from '@playwright/test'
test('edit1', async({page})=>{

    await page.goto("https://letcode.in/edit")
    
    const EnterFullName = await page.locator('//input[@id="fullName"]')
    await EnterFullName.fill("Naveen raj")
    
    await page.waitForTimeout(2000)
    
    const append = await page.locator('//input[@id="join"]')
    const inputtext = await append.inputValue()
    await append.fill( inputtext + ' student')

    await page.waitForTimeout(2000)
    
    const insideText = await page.locator('//input[@id="getMe"]').getAttribute("value")
    console.log('inside text :', insideText)    

    await page.locator('//input[@id="clearMe"]').clear()

    const disabled =  await page.locator('//input[@id="noEdit"]')
    console.log("input field disabled : ", await disabled.isEnabled())

    const readonlyText = await page.locator('//input[@id="dontwrite"]').getAttribute("readonly")

    console.log("The field is readonly : ", readonlyText)
})

test('buttons1', async({page})=>{
    await page.goto("https://letcode.in/button")
    
    const button = await page.locator('//button[@id="home"]')
    await page.waitForTimeout(3000)
    await button.click()
    await page.waitForTimeout(3000)

    await page.goBack()

    const btn2 = await page.locator('//button[@id="position"]')
    const btn2_pos = await btn2.boundingBox()
    console.log("button position : ", `x : ${btn2_pos.x}`, `y : ${btn2_pos.y}`)
    console.log("button height : ", `width : ${btn2_pos.width}`, `height : ${btn2_pos.height}`)
    
})

test.use(
    {
    viewport: { width: 1400, height: 900 },
    userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    locale: 'en-IN'
}
)

test('amazon search',async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForLoadState('networkidle');
    await page.selectOption('//select[@name="url"]',{value:"search-alias=amazon-devices"})
    await page.locator('input#twotabsearchtextbox').pressSequentially(
        'Amazon fire stick',
        { delay: 120 }
    );
    await page.locator("input#nav-search-submit-button").click()
})