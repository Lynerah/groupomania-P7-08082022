import { test, expect } from '@playwright/test';

test.describe.only('Intranet',() => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/auth/login');
            await page.locator('input[type="text"]').fill('celine@mail.com');
            await page.locator('input[type="password"]').fill('celine');
            await page.locator('button:has-text("Connexion")').click();
            await expect(page).toHaveURL('http://localhost:4200/intranetPosts');
    })

    test('home page', async ({ page }) => {
        await page.goto('http://localhost:4200/');

        await expect(page).toHaveTitle(/App-Intranet/);
    
        const home = page.locator('text=Home').first();
        await expect(home).toHaveAttribute('href', '/');
    
        await expect(page.locator('text=Posts')).toBeVisible();
    })

    test('view one post', async ({ page }) => {
        // Click .intranet-post-card > button >> nth=0
        await page.locator('.intranet-post-card > button').first().click();
        await expect(page).toHaveURL('http://localhost:4200/intranetPosts/1');

        // Click text=Like
        await page.locator('text=Like').click();

        // Click text=Dislike
        await page.locator('text=Dislike').click();

        // Click text=Back
        await page.locator('text=Back').click();
        await expect(page).toHaveURL('http://localhost:4200/intranetPosts');

    })

    test('Create post', async ({ page }) => {
        // Click text=New Post
        await page.locator('text=New Post').click();
        await expect(page).toHaveURL('http://localhost:4200/intranetPosts/create');

        // Fill #title
        await page.locator('#title').fill('poste de test');

        // Click textarea[type="text"]
        await page.locator('textarea[type="text"]').click();

        // Fill textarea[type="text"]
        await page.locator('textarea[type="text"]').fill('description du post de test');

        // Click #imageUrl
        await page.locator('#imageUrl').click();

        // Fill #imageUrl
        await page.locator('#imageUrl').fill('https://unsplash.com/photos/pFZx2htSMDE');

        //Click hors fill 
        await page.locator('text=TitreDescription URL de l\'imageEnregistrer').click();

        // Click text=Enregistrer
        await page.locator('text=Enregistrer').click();
        await expect(page).toHaveURL('http://localhost:4200/intranetPosts');

        // Click text=Home
        await page.locator('text=Home').click();
        await expect(page).toHaveURL('http://localhost:4200/');
    })
});