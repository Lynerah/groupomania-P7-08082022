import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:4200/
    await page.goto('http://localhost:4200/');

    // Click text=Posts
    await page.locator('text=Posts').click();
    await expect(page).toHaveURL('http://localhost:4200/auth/login');

    // Click input[type="text"]
    await page.locator('input[type="text"]').click();

    // Fill input[type="text"]
    await page.locator('input[type="text"]').fill('celine');

    // Click input[type="password"]
    await page.locator('input[type="password"]').click();

    // Click button:has-text("Connexion")
    await page.locator('button:has-text("Connexion")').click();
    await expect(page).toHaveURL('http://localhost:4200/intranetPosts');

    // Click text=New Post
    await page.locator('text=New Post').click();
    await expect(page).toHaveURL('http://localhost:4200/intranetPosts/create');

    // Click text=Home
    await page.locator('text=Home').click();
    await expect(page).toHaveURL('http://localhost:4200/');

    // Click text=Continuer vers Snapface
    await page.locator('text=Continuer vers Snapface').click();
    await expect(page).toHaveURL('http://localhost:4200/intranetPosts');

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

    // Click text=New Post
    await page.locator('text=New Post').click();
    await expect(page).toHaveURL('http://localhost:4200/intranetPosts/create');

    // Click #title
    await page.locator('#title').click();

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

    // Click text=NOUVEAU POSTTitreDescription URL de l'imageEnregistrer
    await page.locator('text=NOUVEAU POSTTitreDescription URL de l\'imageEnregistrer').click();

    // Click text=Enregistrer
    await page.locator('text=Enregistrer').click();
    await expect(page).toHaveURL('http://localhost:4200/intranetPosts');

    // Click text=Home
    await page.locator('text=Home').click();
    await expect(page).toHaveURL('http://localhost:4200/');

});