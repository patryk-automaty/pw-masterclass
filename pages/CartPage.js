exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;

        // Locators for empty cart page
        this.continueButton = page.getByRole('link', { name: /continue/i})
    }

    get pageTitle() {
        return this.page.locator('.maintext');
    }

    get emptyCartMessage() {
        return this.page.locator('div.contentpanel');
    }

    async continueShopping() {
        await this.continueButton.click();
    }
}
