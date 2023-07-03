/// <reference types="cypress" />

describe('How to handle link opened in new windows', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com')
  })

  it('Test the positive scenario', () => {
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}) //link to contact us will open in new window normaly

    cy.get('input[name=first_name]').type('This is the first name') // use the selector to define locator that points to element
    cy.get('input[name=last_name]').type('This is the last name') 
    cy.get('input[name=email]').type('email@address.com') 
    cy.get('textarea[name=message]').type('Write some comments here.')
    cy.get('input.contact_button[type=submit]').click()
  });
});
