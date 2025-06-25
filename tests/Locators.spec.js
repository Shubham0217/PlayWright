import {test, expect} from '@playwright/test';



test.describe('verify Title', ()=> {
    test('verify Title', async({page})=>{
        
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await expect(page).toHaveTitle('OrangeHRM');
        await page.waitForTimeout(2000);
    });
});


test.describe('Locators', ()=>{

    test('LoginToOrangeHrm', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


    await page.fill('input[name=username]', 'Admin');

    await page.waitForTimeout(2000);

    await page.fill('input[name=password]', 'admin123');

    await page.waitForTimeout(2000);

    await page.click('button[type=submit]');

    await page.waitForTimeout(2000);
});
});