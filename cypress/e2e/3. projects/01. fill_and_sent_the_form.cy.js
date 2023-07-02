/// <reference types="cypress" />

// use this cdm in terminal to run one specified test --> npx cypress run --spec "cypress/e2e/3. projects/04. form_assertions.cy.js"
// use this cmd in terminal to run all tests in the folder --> npx cypress run --spec "cypress/e2e/3. projects/**/*" 
// use this cmd in terminal to run all tests --> npx cypress run 


describe('Testing the simple form', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
  })

  it('Test the positive scenario', () => {
    cy.get('input[name=first_name]').type('This is the first name') // use the selector to define locator that points to element
    cy.get('input[name=last_name]').type('This is the last name') 
    cy.get('input[name=email]').type('email@address.com') 
    cy.get('textarea[name=message]').type('Write some comments here.')
    cy.get('input.contact_button[type=submit]').click()
  });

  // use "it.only('Only this test', () => {... to run only the specific test
  it('Test the negative scenario', () => {
    cy.get('input[name=first_name]').type('This is the first name') 
    cy.get('input[name=last_name]').type('This is the last name') 
    // cy.get('input[name=email]').type('email@address.com') 
    cy.get('textarea[name=message]').type('Write some comments here.')
    cy.get('input.contact_button[type=submit]').click()
    cy.screenshot('error-message')
  });
});
