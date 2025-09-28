const {test, expect} = require('@playwright/test')

test('first test', async ({page}) => {

    // Open the shop homepage and check that the title contains the shop name
    await page.goto("https://automationteststore.com/");
    await expect(page).toHaveTitle(/Automation Test Store/);

    // Check that the 'Home' link in the navigator is visible
    const homeLink = page.getByRole('link', { name: 'Home'});
    await expect(homeLink).toBeVisible();

    // Check that at least one product thumbnail is visible on the main page
    const products = page.locator('.thumbnail');
    await expect(products.first()).toBeVisible();

    // Check that the Contact us link is visible
    const contactUs = page.getByRole('link', {name:'Contact Us'})
    await expect(contactUs).toBeVisible();

});