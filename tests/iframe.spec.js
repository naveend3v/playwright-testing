// iframe
// Frames and iFrames are embedded web sections used to display external content.
// frameLocator().locator()
// frame -> jmeter -> mobile application
// ref - https://nareshit.com/blogs/working-with-frames-and-iframes-in-playwright

import test from '@playwright/test'

test('iframe test', async({page})=>{
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')

    await page
    .frameLocator('//iframe[@name="globalSqa"]')
    .getByAltText("Selenium Online Training")
    .click()

    await page.waitForTimeout(3000)
})

// Task - same website -> choose 'Jmeter Training'
