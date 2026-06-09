/* Mouse action
page.mouse.wheel(-100,300) =>scroll
	           H   V

page.locator('').dblclick();  => double click

page.locator('').click(); =>left click

page.locator('').click({button:'right'});  => right click

page.locator('').hover(); 

page.dragAndDrop('source','target');  => works in page

(page.locator('source')).dragTo(page.locator('target')) => works in all 


Keyboard action

fill() => instant input , Faster, 
type() => character by character passes the input , Slower
keyboard.press()

fill('Ganesh')
type('Ganesh',{delay: 2000}) */

import test from '@playwright/test';

test('Checking DOM based POPUP',async({page})=>{
 await page.goto('https://www.flipkart.com/');
 
 try{
    await page.waitForSelector('.b3wTlE',{timeout: 5000})
    await page.locator('.b3wTlE').click();
    console.log('Popup closed');
 }
 catch{
    console.log('Popup not appeared');
 }
 await page.locator('//span[text()="Login"]').hover();
 await page.mouse.wheel(0,2000)

//  await page.locator('//span[text()="Login"]').dblclick();
 
 await page.locator("//div[text()='Electronics']").click({button:'right'})

//  await page.locator('//span[text()="Login"]').click();

 await page.waitForTimeout(4000)
})

test('Mouse actions',async({page})=>{
   await page.goto('https://jqueryui.com/droppable/');
   const frame = await page.frameLocator('.demo-frame');
   await page.waitForTimeout(3000)
   await frame.locator('#draggable').dragTo(frame.locator('#droppable'));
   await page.waitForTimeout(4000);
})


test('Keyboard action',async({page})=>{
   await page.goto('https://www.amazon.in/')
   // await page.locator('#twotabsearchtextbox').fill('Laptop')
   // await page.waitForTimeout(3000)
   // await page.locator('#twotabsearchtextbox').fill('mobile')

   await page.locator('#twotabsearchtextbox').type('Laptop')
   await page.waitForTimeout(3000)
   await page.locator('#twotabsearchtextbox').type('mobile')
   await page.keyboard.press('Control+A')
   await page.waitForTimeout(3000)
   await page.keyboard.press('Control+X');
   // await page.keyboard.press('Enter');

   await page.waitForTimeout(4000)
})