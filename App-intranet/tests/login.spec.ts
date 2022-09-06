import { test, expect } from '@playwright/test';

test('test intranet app', async ({ page }) => {

  // Go to http://localhost:4200/
    await page.goto('http://localhost:4200/auth/login');

// Fill input[type="text"]
    await page.fill('input[type="text"]', "celine@mail.com");
    // await page.locator('input[type="text"]').fill('celine@mail.com');
 // Fill input[type="password"]
    await page.fill('input[type="password"]', "celine");
    // await page.locator('input[type="password"]').fill('celine');
// Click button:has-text("Connexion")
    await page.locator('button:has-text("Connexion")').click();
    await expect(page).toHaveURL('http://localhost:4200/intranetPosts');
});