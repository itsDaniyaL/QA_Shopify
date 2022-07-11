describe("Product Page", function () {
    it("Loads the Page", function () {
        //state, action, assertion
        cy.visit('https://us.soyoung.ca/products/linen-abstract-lines-petite-beauty-poche');
        cy.url().should('include', '/products/');


        cy.get('.ProductForm__AddToCart').should(($addtoCart) => {
            expect($addtoCart).to.have.length(1);
        });

        cy.get('.ProductForm__AddToCart').click();
        cy.wait(4000);
        cy.get('.Cart__Checkout').should(($cartpopup) => {
            expect($cartpopup).to.have.length(1);
        })


        cy.get('.Cart__Checkout').click();

        cy.wait(4000);
        cy.get('#checkout_email').type('test@gmail.com');
        cy.get('#checkout_shipping_address_first_name').type('its');
        cy.get('#checkout_shipping_address_last_name').type('test');
        cy.get('#checkout_shipping_address_address1').type('house#1,street#5');
        cy.get('#checkout_shipping_address_city').type('texas');
        cy.get('#checkout_shipping_address_zip').type('11571');
        cy.get('#checkout_shipping_address_phone').type('+1345356353');
        cy.get('#checkout_shipping_address_province').type('New York');
        cy.get('#continue_button').click();
    });
})

40815329935558
//#checkout_email email
//checkout_shipping_address_first_name
//checkout_shipping_address_last_name
//checkout_shipping_address_address1
//checkout_shipping_address_city
//checkout_shipping_address_zip
//checkout_shipping_address_phone
//field__input field__input--select
//continue_button