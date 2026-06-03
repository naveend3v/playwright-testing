import test from '@playwright/test'

test('file upload',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    const file = await page.locator('input[type=file]')
    await file.setInputFiles('tests/iframe.spec.js')
    await page.waitForTimeout(3000)

    await file.setInputFiles(['tests/mouse.spec.js','tests/tables_task.spec.js'])

    await page.waitForTimeout(3000)
})