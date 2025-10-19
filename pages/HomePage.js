exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        // Locator for search input field
        this.searchInput = page.getByPlaceholder('Search Keywords');

        // Locators for currency dropdown
        this.currencyHover = page.locator("a.dropdown-toggle:not([href])");
        this.currencyMenu = page.locator('ul.dropdown-menu.currency');

        // Locators for cart dropdown
        this.cartDropdown = page.locator(".dropdown-toggle[href*='cart']");
        this.cartDropdownMenu = page.locator("ul.dropdown-menu.topcartopen");
        this.cartFromDropdown = this.cartDropdownMenu.locator("a[title='View Cart'], a:has-text('View Cart')");
        this.checkoutFromDropdown = this.cartDropdownMenu.locator("a[title='Checkout'], a:has-text('Checkout')");

        // Locators for products
        this.addToCartButtons = page.locator('a.productcart, a:has(i.fa-cart-plus), button:has(i.fa-cart-plus)')
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
        await this.currencyMenu.waitFor({ state: 'visible' });
        const currencyOption = this.page.locator(`a[href*="currency=${code}"]`)
        await currencyOption.waitFor({ state: 'visible' });
        await currencyOption.click();
    }

    // Go to cart page from toggle dropdown
    async goToCartToggle() {
        await this.cartDropdown.click();
    }

    // Go to cart page from  dropdown
    async gotoCartFromDropdown() {
        // Some themes open the cart only on click
        await this.cartDropdown.click();
        //await this.cartDropdownMenu.waitFor({ state: 'visible' });
        //await this.cartFromDropdown.first().waitFor({ state: 'visible' });
        //await this.cartFromDropdown.first().click();
    }

    // Go to checkout page from  dropdown
    async gotoCheckoutFromDropdown() {
        await this.cartDropdown.click();
        await this.cartDropdownMenu.waitFor({ state: 'visible' });
        await this.checkoutFromDropdown.first().waitFor({ state: 'visible' });
        await this.checkoutFromDropdown.first().click();
    }

    // Add random product to cart from main page
    async addRadomProductToCart() {
        const count = await this.addToCartButtons.count();
        const index = Math.floor(Math.random() * count);
        const picked = this.addToCartButtons.nth(index);
        await picked.click();
    }


};
