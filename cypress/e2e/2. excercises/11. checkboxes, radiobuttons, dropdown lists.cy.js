/// <reference types="cypress" />

describe('Checkboxes, radiobuttons and dropdown lists', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com')
  })

  it('Checkboxes', () => {
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}) 
    //cy.get('#checkboxes > :nth-child(1) > input').check()
    cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
    cy.get('#checkboxes > :nth-child(5) > input').uncheck().should('not.be.checked')

    cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')
  });

  it('Radiobuttons', () => {
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}) 
    cy.get('#radio-buttons').find('[type="radio"]').first().check().should('be.checked')
    cy.get('#radio-buttons').find('[type="radio"]').eq(1).check().should('be.checked')
    cy.get('[value=cabbage]').should('be.disabled')
  });

  it.only('Dropdown lists', () => {
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    cy.get('#dropdowm-menu-1').select('c#')
    cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
    cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery')

    cy.get('#dropdowm-menu-2').select('maven').contains('Maven') // selected by its value
    cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG') // selected by text
  });

});
