const {test, expect} = require('@playwright/test')

test('first test', async ({page}) => {

    // Open the shop homepage and check that the title contains the shop name
    await page.goto("https://automationteststore.com/");
    await expect(page).toHaveTitle(/A place to practice your automation skills/);

    // Check that the 'Home' link in the navigator is visible
    const homeLink = page.getByRole('link', { name: 'Home'});
    await expect(homeLink).toBeVisible();

    // Check that at least one product thumbnail is visible on the main page
    const products = page.locator('.thumbnail');
    await expect(products.first()).toBeVisible();

    // Check that the Contact us link is visible
    const contactUs = page.getByRole('link', {name:'Contact Us'})
    await expect(contactUs).toBeVisible();

});

test('Search returns results', async ({page}) => {
    await page.goto("https://automationteststore.com/");
    await expect(page).toHaveTitle(/A place to practice your automation skills/);

    // Open the shop homepage and check that the title contains the shop name
    const searchInput = page.getByPlaceholder('Search Keywords');
    await expect(searchInput).toBeVisible();

    // Type a query and submit
    await searchInput.fill("shampoo");
    await searchInput.press("Enter");

    // Verify results are visible
    const searchResults = page.locator('.fixed_wrapper .prdocutname');
    await expect(searchResults.first()).toBeVisible();

    // Verify results count is greater than 0
    const countResults = await searchResults.count();
    expect(countResults).toBeGreaterThan(0);

})

test('add the first product to the cart', async({page}) => {
    await page.goto("https://automationteststore.com/");
    await expect(page).toHaveTitle(/A place to practice your automation skills/);

    const searchInput = page.getByPlaceholder('Search Keywords');
    await expect(searchInput).toBeVisible();

    // Type a query and submit
    await expect(searchInput).toBeVisible();
    await searchInput.fill('shirt');
    await searchInput.press('Enter');

    const results = page.locator('.fixed_wrapper .prdocutname');
    await expect(results.first()).toBeVisible();


    const addToCartButton = page.locator('.fa.fa-cart-plus.fa-fw');
    await addToCartButton.first().click();

    const addToCart = page
    .locator('a.productcart, a:has(i.fa-cart-plus), button:has(i.fa-cart-plus)')
    .first();
    await expect(addToCart).toBeVisible();
    await addToCart.click();


    const ShoppingCartTitle = page.locator('.maintext');
    await expect(ShoppingCartTitle).toContainText('Shopping Cart');

    const cartRows = page.locator('table tr');
    await expect(cartRows.count()).toBeGreaterThan(0);

})

test('change ')