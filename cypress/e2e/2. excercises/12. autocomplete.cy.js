/// <reference types="cypress" />

describe('Autocomplete list', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com')
  })

  it('automcomplete test - deprecated (el.click)', () => {
    cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true}) 
    //cy.get('#checkboxes > :nth-child(1) > input').check()
    cy.get('#myInput').type('A') // type A into to box and check the suggestions
    cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => { // #myInputautocomplete-list > * mean select all suggestions
      const prod = $el.text() // iterate over the items
      const productToSelect = 'Avacado'

      if(prod === productToSelect) {
        $el.click() // deprecated
        $el.trigger('click')

        cy.get('#submit-button').click()
        cy.url().should('include', productToSelect)
      }
    }) 
  });
});
