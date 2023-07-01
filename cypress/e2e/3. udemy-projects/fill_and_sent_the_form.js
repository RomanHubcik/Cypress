/// <reference types="cypress" />

describe('', () => {
  it('', () => {
    //cy.visit('http://webdriveruniversity.com/')
    //cy.get('#contact-us').contains('CONTACT US').click()

    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('input[name=first_name]').type('This is the first name') 
    cy.get('input[name=last_name]').type('This is the last name') 
    cy.get('input[name=email]').type('This is the email') 
    cy.get('textarea[name=message]').type('Write some comments here.')
    cy.get('.contact_button[type=submit]').click()
    // cy.window().then((win) => {
    //   // win is the remote window  
    // })
  });
});