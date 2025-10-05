const { test, expect} = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('Change currency to EUR', async ({page}) => {
    const home = new HomePage(page);

    await home.goto();
    await home.changeCurrency('EUR');

    const prices = page.locator('.price');
    await expect(prices.first()).toContainText('€');
})

test('Change currency to USD', async ({page}) => {
    const home = new HomePage(page);

    await home.goto();
    await home.changeCurrency('USD');

    const prices = page.locator('.price');
    await expect(prices.first()).toContainText('$');
})

test('Change currency to GBP', async ({page}) => {
    const home = new HomePage(page);

    await home.goto();
    await home.changeCurrency('GPB');

    const prices = page.locator('.price');
    await expect(prices.first()).toContainText('£');
})