import {test, expect} from '@playwright/test'

test("buttons_test", async({page})=>{
    const home = await page.locator("#home")
    await home.click()
    await page.goBack()

    const location = await page.locator("#position")
    const position = await location.boundingBox()
    console.log(position.x)
    console.log(position.y)

    const height = await page.locator("#property")
    const hw = await height.boundingBox()
    console.log(hw.height, hw.width)

    const color = await page.locator("#color")
    const bc = await color.evaluate(el => getComputedStyle(el).backgroundColor)
    console.log(bc)

    const disable = await page.locator('[title="Disabled button"]')
    const enable = await disable.isEnabled()
    console.log(enable)
}
)