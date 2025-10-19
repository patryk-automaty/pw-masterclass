const { test, expect} = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');

test("Continue shopping when the shopping cart is empty", async ({page}) => {

    const cart = new CartPage(page);
    const home = new HomePage(page);

    await home.goto();
    await home.gotoCartFromDropdown();
    await expect(cart.pageTitle).toHaveText('Shopping Cart');
    await expect(cart.emptyCartMessage).toContainText('Your shopping cart is empty!');
    await cart.continueShopping();
 
})


