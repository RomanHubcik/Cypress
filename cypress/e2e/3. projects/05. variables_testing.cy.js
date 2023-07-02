/// <reference types="cypress" />

describe('Working with variables', () => {

    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/')
        
        // // first option with constant = unstable
        // const makeupLink = cy.get('a[href$="path=36"]')
        // const skincareLink =  cy.get('a[href$="path=43"]') 
        // // or xpath: (//a[contains(@href, "path=36")])[1]
        // makeupLink.click()
        // skincareLink.click()

        // second option with constant = unstable
        // const makeupLink = cy.get('a[href$="path=36"]')
        // makeupLink.click()
        // const skincareLink =  cy.get('a[href$="path=43"]') 
        // // or xpath: (//a[contains(@href, "path=36")])[1]
        // skincareLink.click() 

        // third option (recommended)
        cy.get('a[href$="path=36"]').click()
        //cy.get('a[href$="path=43"]').click()

        // cy.get("h1 .maintext").then(($headerText) => {  // handle the variable "Makeup" from the element
        //     const headerText = $headerText.text()
        //     cy.log("Found header text: " + headerText)
        //     expect(headerText).is.eq('Makeup')

        // works without using const, calling directly $var.text()
        cy.get("h1 .maintext").then(($headerText) => {  // handle the variable "Makeup" from the element
            cy.log("Found header text: " + $headerText.text())
            expect($headerText.text()).is.eq('Makeup')

        cy.get("h1 .maintext").should('have.text', 'Makeup') // works too

        })

    });

}); 