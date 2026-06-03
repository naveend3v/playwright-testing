// syntax

/* recordVideo {
    dir: '/videos/'
} */

// browser -> entire browser session (chromium, firefox, safari)
// context -> a window in browser
// page -> a tab in window

// browser -> context -> page -> amazon

import test from '@playwright/test'

test('video record', async({browser}) => {
    const context1 = await browser.newContext({
        recordVideo: {
            dir: 'videos/'
        }
    })

    const page1 = await context1.newPage()
    await page1.goto('https://flipkart.com')
    
    await page1.waitForTimeout(2000)
    
    const page2 = await context1.newPage()
    await page2.goto('https://amazon.com')

    await page1.waitForTimeout(2000)
})