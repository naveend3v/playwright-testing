// DAY - 1

// what is playwright?
// playwright is an open-source automation testing tool developed by microsoft.
// it supported browser
// - chrommium (chrome and edge)
// - firefox
// - webkit (safari)

// it supported programming language
// - javascript
// - typescript
// - python
// - c#
// - java

// it supported OS  - windows, macos, linux

// CI/CD pipeline - Continuous Integration and Continuous Deployment pipeline

// playwright features
// free and open-source
// it supported multi browser & multi os & multi programming language
// easy setup and configuration
// it support UI (User interface) testing, API testing
// it support CI/CD and docker support
// parallel test execution
// it support screenshot and video recording, multi windows, multi tabs and frames, multi window handling.
// auto handling of alert frame wait
// auto wait (no need for explicitly wait mostly)
// it support page object model

// DAY - 2

// Navigation function - moving from one page to another page.
// navigation functions:
// - goto() - used to open url
// - title() - used to get the page title
// - url() - used to get the current page url
// - goBack() - used to go to the previous page
// - goFroward() - used to move to the next page
// - reload - used to refresh the current page

import { test, expect } from '@playwright/test' // used to import testing function from playwright 
test('navigate', async({page}) => { // used to create testcase in playwright
    await page.goto("https://www.amazon.in")
    await page.waitForLoadState()
    const u1 = await page.url()
    console.log('url =',u1)
    const t1 = await page.title()
    console.log('title =',t1)

    await page.goto("https://www.flipkart.com")
    const u2 = await page.url()
    console.log('url =',u2)
    const t2 = await page.title()
    console.log('title =',t2)

    await page.goto("https://w3schools.com")
    const u3 = await page.url()
    console.log('url =',u3)
    const t3 = await page.title()
    console.log('title =',t3)
    
    // await page.goBack()

    // await page.goForward()

    // await page.reload()
} 
)
// command to execute testcase file:
// npx playwright test tests/navigation.spec.js --project=chromium --headed --debug

// Task -  take 2 website & fetch the page title

// Practise project url:
// https://letcode.in/test
// https://testautomationpractice.blogspot.com/

// Realtime project url:
// https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
// https://adactinhotelapp.com/
