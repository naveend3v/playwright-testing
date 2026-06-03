import { test, expect } from '@playwright/test';

test('screenshot', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(3000);
  await page.screenshot({path:'fullpage.png',fullPage:true}); //saving screenshot in key value pair

  const username = await page.locator('[name="username"]');
  await username.screenshot({path:'particularelement.png',particular:true});

})