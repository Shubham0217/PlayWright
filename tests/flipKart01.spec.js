
import { test, expect } from '@playwright/test';

test.describe('Flipkart', () => {

    test('VerifyTitle', async ({ page }) => {
        await page.goto("https://www.flipkart.com/");
        await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
        await page.waitForTimeout(2000);
    });

    test('LoginFlipkart', async ({ page }) => {
        await page.goto("https://www.flipkart.com/");

        await page.waitForSelector("//span[text() = 'Login']", { timeout: 5000 });

        await page.click("//span[text() = 'Login']");
        await page.waitForTimeout(2000);

        await page.fill("//input[@class='r4vIwl BV+Dqf']",  "7509474508");

        await page.waitForTimeput(2000);

        await page.click("2000");
        

    });
});