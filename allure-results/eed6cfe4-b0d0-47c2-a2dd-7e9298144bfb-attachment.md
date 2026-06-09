# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard_action.spec.js >> keyboard action
- Location: tests/keyboard_action.spec.js:3:5

# Error details

```
Error: locator.pressSequentially: Target page, context or browser has been closed
Call log:
  - waiting for locator('xpath=(//input[@name=\'q\'])[1]')

```

# Test source

```ts
  1  | import test from '@playwright/test'
  2  | 
  3  | test('keyboard action', async({page})=>{
  4  |     await page.goto('https://www.flipkart.com')
  5  |     await page.waitForTimeout(2000)
  6  |     const input_field = await page.locator("(//input[@name='q'])[1]")
> 7  |     await input_field.pressSequentially('lg air conditioner')
     |                       ^ Error: locator.pressSequentially: Target page, context or browser has been closed
  8  |     await page.waitForTimeout(2000)
  9  |     await page.press('return')
  10 | })
```