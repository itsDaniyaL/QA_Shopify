//QA Steps to verify checkout flow of adding product in Cart and Checking out in soyoung shopify powered website.
//1) Visiting and Verifying the product page is currently open
//2) Adding the product in the Cart by using the 'Add to Cart' DOM element and clicking it
//3) Verifying that checkout popup is currently open by checking Checkout Header is visible
//4) Clicking the checkout button by using the Cart__Checkout button DOM element.
//5) Verifying the checkout page is currently loaded
//6) Entering required entries in the required fields by getting their DOM element and typing test data
//7) Clicking the continue button using the continue button DOM element.
//8) Verifying current page is shipping method

describe("Checkout flow for a product", function () {

    //1) Visiting and Verifying the product page is currently open
    it("Visiting the Product Page", function () {
        cy.visit('https://us.soyoung.ca/products/linen-abstract-lines-petite-beauty-poche'); //Arranging the test by visiting the product page - Arrange
        cy.url().should('include', '/products/'); // Getting the url in order to check whether on the Product Page - Action
        //should used to assert whether the url contains /products/ - assert
    });

    //2) Adding the product in the Cart by using the 'Add to Cart' DOM element and clicking it
    //3) Verifying that checkout popup is currently open by checking Checkout Header is visible
    it("Adding the product to Cart", function () {
        cy.get('.ProductForm__AddToCart').should(($addtoCart) => {
            expect($addtoCart).to.have.length(1); // Arranging to Add the product in the cart - Arrange
        });
        cy.get('.ProductForm__AddToCart').click(); // Action taken for checkout popup to appear - Action
        cy.wait(4000); //Wait performed as popup may not appear in the initial 2 to 3 seconds
        cy.get('.Cart__Checkout').should(($cartpopup) => {
            expect($cartpopup).to.have.length(1); // Assertion to identify checkout popup is visible - Assert
        })
    });

    //4) Clicking the checkout button by using the Cart__Checkout button DOM element.
    //5) Verifying the checkout page is currently loaded
    it("Navigate to checkout page from Popup checkout", function () {
        cy.get('.Cart__Checkout').should(($cartpopup) => {
            expect($cartpopup).to.have.length(1); // Arranging for checkout Page by identifying cart popup is currently visible
        });
        cy.get('.Cart__Checkout').click(); //Action taken to navigate to Checkout Page.
        cy.get('#section-delivery-title').should('include', 'Shipping address'); //Assertion performed to identify if on the checkout page - Assert
    });

    //6) Entering required entries in the required fields by getting their DOM element and typing test data
    //7) Clicking the continue button using the continue button DOM element.
    //8) Verifying current page is shipping method
    it("Entering required information in the input fields and navigating to shipping", function () {
        cy.get('#checkout_email').type('test@gmail.com'); // Arranging for the test - Arrange
        cy.get('#checkout_shipping_address_first_name').type('its'); // Arranging for the test - Arrange
        cy.get('#checkout_shipping_address_last_name').type('test'); // Arranging for the test - Arrange
        cy.get('#checkout_shipping_address_address1').type('house#1,street#5'); // Arranging for the test - Arrange
        cy.get('#checkout_shipping_address_city').type('texas'); // Arranging for the test - Arrange
        cy.get('#checkout_shipping_address_zip').type('11571'); // Arranging for the test - Arrange
        cy.get('#checkout_shipping_address_phone').type('+1345356353'); // Arranging for the test - Arrange
        cy.get('#checkout_shipping_address_province').type('New York'); // Arranging for the test - Arrange
        cy.get('#continue_button').click(); //Action performed to navigate to the Shipping Page
        cy.wait(4000);
        cy.url().should('include', 'step=shipping_method'); // Assertion performed to identify Shipping Page
    });
})