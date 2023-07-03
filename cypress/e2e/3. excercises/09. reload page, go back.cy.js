/// <reference types="cypress" />

describe('How to handle link opened in new windows', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com')
  })

  it('Test page reload etc', () => {
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}) //link to contact us will open in new window normaly
    cy.wait(2000)
    cy.url().should('include', 'contactus')
    cy.wait(2000)

    cy.go('back')
    cy.wait(2000)
    cy.reload()
    cy.wait(2000)
    // cy.reload(true)  //reload without using cache
    cy.go('forward')
    cy.wait(2000)

  });
});
