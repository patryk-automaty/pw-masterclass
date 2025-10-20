exports.AccountLoginPage = class AccountLoginPage {
    constructor(page) {
        this.page = page;

        // I am a new customer. section
        this.registerAccountRadio = page.locator('input[type="radio"][value="register"]');
        this.guestCheckoutRadio = page.locator('input[type="radio"][value="guest"]');
        this.continueButton = page.locator('button[title="Continue"]');

        // Returning Customer section
        this.loginNameInput = page.getByPlaceholder('Login name');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.locator('button[title="Login"]');
        this.forgotPasswordLink = this.page.getByRole("link", {name : /forgot your password/i});
        this.forgotLoginLink = this.page.getByRole("link", {name : /forgot your login/i});

    }
}