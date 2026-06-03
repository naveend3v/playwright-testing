// Assertions
// hard assertions - it will stop the execution if error works
// soft assertions - 

/* 
Page Assertion:
toHaveURL('https://amazon.com')
toHaveTitle('Amazon')

await expect(page).toHaveURL()

element:
toBeVisible() => await expect(page.locator('')).toBeVisible()
toBeVisible() => await expect(page.locator('')).toBeEnabled()
toBeDisabled() => await expect(page.locator('')).toBeDisabled()
toHaveText()
toContainText()
toHaveValue()
toHaveAttribute()
toBeChecked()
toBeEditable()
toBeEmpty()

negative assertions:
not.toBeVisible()
not.toBeChecked() 
*/

import test from '@playwright/test'

import { expect } from '@playwright/test';
import { AssertionError } from 'node:assert/strict';

test('locate the element', async ({page}) => {

await page.goto('https://demoqa.com/text-box/');

await expect (page).toHaveURL('https://demoqa.com/text-box/')

await expect(page).toHaveTitle('demosite') 

await expect(page.locator('#submit')).toBeVisible();

await expect(page.locator('#submit')).toBeEnabled(); 

// await expect(page.locator('#submit')).toBeHidden();

await expect(page.locator('#userName-label')).toHaveText('Full Name')

await expect(page.locator('#currentAddress-label')).toContainText('ress')

});