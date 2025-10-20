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
 
});

test("Continue shopping when the shopping cart has at least one product", async ({page}) => {

    const cart = new CartPage(page);
    const home = new HomePage(page);

    await home.goto();
    await home.addRadomProductToCart();

    await home.gotoCartFromDropdown();
    await expect(cart.pageTitle).toHaveText('Shopping Cart');
    const rows = await cart.cartRows.count();
    await expect(rows).toBeGreaterThan(0);

    await cart.continueShopping();

})

test("Remove only product from cart", async ({page}) => {
    const cart = new CartPage(page);
    const home = new HomePage(page);

    await home.goto();
    await home.addRadomProductToCart();

    await home.gotoCartFromDropdown();
    await expect(cart.pageTitle).toHaveText('Shopping Cart');
    const rows = await cart.cartRows.count();
    await expect(rows).toBeGreaterThan(0);

    await cart.deleteProduct();
    await expect(cart.emptyCartMessage).toContainText('Your shopping cart is empty!');
    await cart.continueShopping();

})


