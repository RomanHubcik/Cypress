/// <reference types="cypress" />

describe('Test copy text', () => {
  beforeEach(() => {
    cy.visit('https://www.mthiker.sk/clanky')
    //cy.get('#data-table').invoke('removeAttr', 'target').click({force:true})
  })

  // it('Test copy text', () => {
  //   cy.get('.ml-sm-2 > .btn').then(($el) =>{
  //     if ($el.text().includes('Súhlasím')) {
  //       cy.get('.ml-sm-2 > .btn').click()
  //     }
  //   })
  // });

  // it('Accept cookies', () => {
  //   if (cy.get('.ml-sm-2 > .btn').contains('Súhlasím')) {
  //     cy.get('.ml-sm-2 > .btn').click()
  //   }
  //   cy.get('.navbar-toggler > :nth-child(1)').click()
  //   cy.get(':nth-child(2) > .next').click()
  //   cy.get('[href="https://www.mthiker.sk/clanky/turistika"]').click()
  //   cy.get(':nth-child(1) > h2 > a').click()
  //   cy.get('.mb-4').contains('pivko')
  //   cy.get('h1').type('{selectall}')
  // });

  // it('Accept cookies', () => {
  //   if (cy.get('.ml-sm-2 > .btn').contains('Súhlasím')) {
  //     cy.get('.ml-sm-2 > .btn').click()
  //   }
  //   cy.get('html:root').eq(0).invoke('prop', 'innerHTML').then(($el) => {
  //     cy.writeFile('testweb.htm', $el);
  //   });
  // });

  it('Accept cookies', () => {
    if (cy.get('.ml-sm-2 > .btn').contains('Súhlasím')) {
      cy.get('.ml-sm-2 > .btn').click()
    }
    cy.get('h2').invoke('text').then(($el) => {
      cy.writeFile('saveH2.htm', $el)
    })
  });

});