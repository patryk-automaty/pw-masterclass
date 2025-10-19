exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;

        // Locators for empty cart page
        this.continueButton = page.getByRole('link', { name: /continue/i});
        this.pageTitle = page.locator('.maintext');
        this.emptyCartMessage = page.locator('div.contentpanel');
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
}
