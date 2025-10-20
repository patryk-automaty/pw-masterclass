exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;

        // Locators for empty cart page
        this.continueButton = page.getByRole('link', { name: /continue/i});
        this.pageTitle = page.locator('.maintext');
        this.emptyCartMessage = page.locator('div.contentpanel');

        // Locators for cart with added products
        this.cartRows = page.locator('table tr')
        this.deleteProductButtons = page.locator("a[href*='remove']")
    }

    get pageTitleText() {
        return this.pageTitle;
    }

    get emptyCartMessageText() {
        return this.emptyCartMessage;
    }

    async continueShopping() {
        await this.continueButton.click();
    }

    async deleteProduct() {
        await this.deleteProductButtons.first().click()
    }
}
