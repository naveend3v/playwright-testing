/* import {test, expect} from '@playwright/test'

test('edit1', async({page})=>{
    await page.goto("https://letcode.in/edit")

    const username = await page.locator("#fullName")
    username.fill("NaveenRaj")
}
) */

import {test, expect} from '@playwright/test'

test('edit2', async ({ page }) => {

    await page.goto("https://letcode.in/edit")


    const username = await page.getByPlaceholder("Enter first & last name")
    await username.fill("Nagarajan")

    const append = await page.locator("#join")
    await append.fill("Student")

    const getme = await page.locator("#getMe")
    const value =await getme.getAttribute("value")
    console.log(value)

    const clearme =await page.locator("#clearMe")
    await clearme.clear()

    const disabled = await page.locator("#noEdit")
    const value2 =await disabled.isEnabled()
    console.log(value2)

    const readonly = await page.locator ("#dontwrite").getAttribute("readonly")
    console.log("This text is readonly",readonly)
})
// Used to enter or modify text in a text box

//Task - Demo - automation testing (https://demo.automationtesting.in/Register.html)
//Leafground - https://www.leafground.com/input.xhtml;jsessionid=node01ql4b4v37axtepqtyh20jjr9h15346889.node0

// selector 
// A selector is used to identify and locate elements

//Method 
//1.text selector - find elements using visible text - getByText()
//2.placeholder selector - find input using placeholder text - getByPlaceholder()
//3.label selector - use label associate with input -getByLabel()
//4.role selector - used to find elements based on the role - getByRole()
//5.Locator selector - used to find an interact with element on a webpage -Locator() - It supports CSS&Xpath
//6. Textid Selector - used to custom attribute - getByTextId()