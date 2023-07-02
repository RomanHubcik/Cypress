/// <reference types="cypress" />

describe('Testing the simple form', () => {

  it('Assert test for automationteststore', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('a[href$="contact"]').click()
    cy.get('#ContactUsFrm_first_name').type('Firstname Lastname')
    cy.get('#ContactUsFrm_email').type('my@email.com')
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
    cy.get('#ContactUsFrm_enquiry').type('here is some question maybe.')
    cy.get('button[title="Submit"]').click()
    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
  });

  it.only('Assert test for webdriveruniversity', () => {
    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('input[name=first_name]').type('This is the first name') 
    cy.get('input[name=last_name]').type('This is the last name') 
    cy.get('input[name=email]').type('email@address.com') 
    cy.get('textarea[name=message]').type('Write some comments here.')
    cy.get('input.contact_button[type=submit]').click()
    cy.get('h1').should('have.text', 'Thank You for your Message!')
  });

});
  