exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        // Locator for search input field
        this.searchInput = page.getByPlaceholder('Search Keywords');

        // Locators for currency dropdown
        this.currencyHover = page.locator("a.dropdown-toggle:not([href])")
        this.currencyMenu = page.locator('ul.dropdown-menu.currency')
        
    }

    // Opens the main page
    async goto() {
        await this.page.goto('https://automationteststore.com/');
    }

    // Search method using the search bar
    async searchFor(productName) {
        await this.searchInput.fill(productName);
        await this.searchInput.press('Enter');
    }

    // Change currency
    async changeCurrency(code) {
        await this.currencyHover.hover();
        await this.currencyMenu.waitFor({state: 'visible'});
        const currencyOption = this.page.locator(`a[href*="currency=${code}"]`)
        await currencyOption.waitFor({ state: 'visible' });
        await currencyOption.click();
    }
};