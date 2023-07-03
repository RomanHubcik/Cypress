/// <reference types="cypress" />

describe('How to handle link opened in new windows', () => {

  it('Test http and https', () => {
    cy.visit('http://webdriveruniversity.com')
    cy.visit('https://www.google.com')

    //in past didnt worked: reason was security measure that needs to be turned off in order to work
    //in cypress.config.js was written "chromeWebSecurity: false" on line 8
  });
});
