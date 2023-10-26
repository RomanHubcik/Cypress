/// <reference types="cypress" />

describe('How to handle link opened in new windows', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com')
  })

  it('Click on alert', () => {
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true}) 
    cy.get('#button1').click() // message after click will not show on the webpage, but only on Cypress log (web)

    cy.on('window:alert', (str) => {
      expect(str).to.equal('I am an alert box!')
    })
  });

  it('Press OK alert', () => {
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true}) 
    cy.get('#button4').click() // automatically click on the button on the popun and onlso show message that it was done

    cy.on('window:alert', (str) => { // windows:alert works here, but better option is windows:confirm
      return true;
    })
    cy.get('#confirm-alert-text').contains('You pressed OK!')
  });

  it('Press Cancel alert', () => {
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true}) 
    cy.get('#button4').click() // automatically click on the button on the popun and onlso show message that it was done

    cy.on('window:confirm', (str) => { // check the documentation - window:confirm can do Cancel, windows:alert cannot
      return false;
    })
    cy.get('#confirm-alert-text').contains('You pressed Cancel!')
  });

  it('Press Cancel alert using stub', () => {
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true}) 
    const stub = cy.stub()
    cy.on('window:confirm', stub)
    cy.get('#button4').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(() => {
      return true;
    }).then(() => {
      cy.get('#confirm-alert-text').contains('You pressed OK!')
    })
  });

});
