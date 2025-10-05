exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;

        // Locators for empty cart page
        this.cartPageTitle = page.locator('.maintext')
        this.emptyCartMessage = page.locator('div.contentpanel')
        this.continueButton = page.getByRole('link', { name: /continue/i})
    }

    async getPageTitle() {
        
    }
}