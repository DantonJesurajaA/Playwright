const { test, expect } = require('@playwright/test');

const baseUrl = "https://eventhub.rahulshettyacademy.com";

test('Test 1', async ({ page }) => {

    await page.goto(`${baseUrl}/login`);

    await expect(page.getByText('Sign in to EventHub')).toBeVisible();
    await expect(page.getByPlaceholder('you@email.com')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();

});

test('Test 2', async ({ page }) => {

    await page.goto(`${baseUrl}/login`);

    const currentUrl = page.url();

    expect(currentUrl).toContain('/login');

});