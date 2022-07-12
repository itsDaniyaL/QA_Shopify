describe("Checkout flow for a product", function () {
    it("Visiting the Product Page", function () {
        cy.visit('https://us.soyoung.ca/products/linen-abstract-lines-petite-beauty-poche'); //Arranging the test by visiting the product page - Arrange
        cy.url().should('include', '/products/'); // Getting the url in order to check whether on the Product Page - Action
        //should used to assert whether the url contains /products/ - assert
    });

    it("Navigate to checkout by adding Product in cart and checking out", function () {
        cy.get('.ProductForm__AddToCart').should(($addtoCart) => {
            expect($addtoCart).to.have.length(1); // Action being performed to get the Add to Cart button's DOM element - Action
        });

        cy.get('.ProductForm__AddToCart').click(); // Action taken for checkout popup to appear - Action
        cy.wait(4000); //Wait performed as popup may not appear in the initial 2 to 3 seconds
        cy.get('.Cart__Checkout').should(($cartpopup) => {
            expect($cartpopup).to.have.length(1); // Action being performed to identify whether in the checkout popup menu
        })
        cy.get('.Cart__Checkout').click(); //Action taken to navigate to Checkout Page.

        cy.get('#section-delivery-title').should('include', 'Shipping address'); //Assertion performed to identify if on the checkout page - Assert
    })

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
    })
})