/// <reference types="cypress" />

describe('Working with variables', () => {

    it('Iterate over the products', () => {
        cy.visit('https://automationteststore.com/')

        cy.get('a[href$="path=52"]').click()
        //cy.get('a[href$="path=43"]').click()

        cy.get('.fixed_wrapper .fixed').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text()) // list iterated items
            if($el.text().includes('Curls to straight Shampoo')) {
                cy.wrap($el).click() // click on iterated object if shampoo name = $el
            
           }
        })
    });

    it('Use alias', () => {
        cy.visit('https://automationteststore.com/')

        cy.get('a[href$="path=52"]').click()
        //cy.get('a[href$="path=43"]').click()

        cy.get('.fixed_wrapper .fixed').eq(0).invoke('text').as('productThumbnail') //create alias
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')

    });

}); 