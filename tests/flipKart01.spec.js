import {test, expect} from' @playwright/test';

test.describe(('Flipkart'), ()=>{

    test(VerifyTitle, async({page})=>{

        await page.goto("https://www.flipkart.com/");
    })



})