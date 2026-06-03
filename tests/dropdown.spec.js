// dropdown is an ui Element (html <select>) that always used to choose one or more option from a listed.
// Type:
// - single dropdown = where user could select only one option at a time
// - multiple dropdown = where user could select more than one option at a same time

import{test, expect} from '@playwright/test'

test('dropdown', async({page})=>{
    await page.goto("https://letcode.in/dropdowns")
    // const singleDropDown = await page.locator('select#fruits')  
    
    // await singleDropDown.selectOption({index:1})
    // await page.waitForTimeout(3000)
    
    // await singleDropDown.selectOption({value:"2"})
    // await page.waitForTimeout(3000)
    
    // await singleDropDown.selectOption({label:"Pine Apple"})

    // const singleDropDownAllOptions = await singleDropDown.locator("option").allTextContents()
    // console.log("single dropdown all options : ",singleDropDownAllOptions)

    // const single = await singleDropDown.evaluate(el => el.multiple)
    // console.log(single)

    // multiple dropdown
    const multipleDropDown = await page.locator('//select[@id="superheros"]')

    console.log("is that multiple dropdown : ", await multipleDropDown.evaluate(el => el.multiple))

    await page.waitForTimeout(2000)

    console.log("multiple dropdown options: ", await multipleDropDown.locator("option").allTextContents())

    await page.waitForTimeout(2000)

    await multipleDropDown.selectOption([
        {index:0},
        {value:"aq"},
        {label:"The Avengers"}
    ])

    await page.waitForTimeout(2000)

    const selectedLabels = await multipleDropDown.evaluate(sel => 
        Array.from(sel.selectedOptions).map(option => option.label))
    console.log("all selected values : ", selectedLabels)

})