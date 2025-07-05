let {test, expect} = require('@playwright/test');  //test is required for test and except is required for validation

test('Home Page', async({page})=>{

   await page.goto('https://demoblaze.com/index.html'); 
   
   
   const pagetitle = await page.title(); // Await the title
    console.log(pagetitle); //this will print the title of the page in console

    await expect(page).toHaveTitle('STORE'); // Await the expect
    

    const pageurl = page.url(); // Correct way to get URL
    console.log(pageurl); //this will print the url of the page in console



    await expect(page).toHaveURL('https://demoblaze.com/index.html'); // Await the expect
    
    await page.close(); // this will   page after execution
})