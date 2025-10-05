exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        // Locator for search input field
        this.searchInput = page.getByPlaceholder('Search Keywords');
        
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
};