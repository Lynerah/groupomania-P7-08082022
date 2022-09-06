import { test, expect } from '@playwright/test';

test.describe('Snapshot', () => {
    test.beforeEach(async ({ page}) => {
        await page.goto('http://localhost:4200/')
    })

    test('verification aspect bouton', async ({ page }) => {
        // await expect(page.locator('button', {hasText: 'Continuer vers Snapface'})).toHaveText('Continuer vers Snapface')
        expect(await page.screenshot()).toMatchSnapshot('button.png')
    })
})