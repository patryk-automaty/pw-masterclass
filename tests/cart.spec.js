const { test, expect} = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { HomePage } = require('../pages/CartPage');

test("Continue shopping when the shopping cart is empty", async ({page}) => {

    const cart = new CartPage(page);
    const home = new HomePage(page);

    home.goto()
    home.gotoCartFromDropdown()

})