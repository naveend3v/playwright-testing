import test from '@playwright/test'

test('keyboard action', async({page})=>{
    await page.goto('https://www.flipkart.com')
    await page.waitForTimeout(2000)
    const input_field = await page.locator("(//input[@name='q'])[1]")
    await input_field.pressSequentially('lg air conditioner')
    await page.waitForTimeout(2000)
    await input_field.press('Enter')
})