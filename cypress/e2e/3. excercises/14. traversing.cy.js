/// <reference types="cypress" />

describe('Traversing elemnets', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com')
    cy.get('#data-table').scrollIntoView().invoke('removeAttr', 'target').click({force:true}) //scroll into view and click
  })

  it('get children of DOM element', () => {
    cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')
  });

  it('use parent() to retrieve specific element', () => {
    cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum')
  });

  it('use parents() to retrieve specific element', () => {
    cy.get('.traversal-cite').parents().should('match', 'blockquote')
  });

  it('use siblings() to retrieve specific element', () => {
    cy.get('.traversal-button-other-states .active').siblings().should('have.length', '3')
  });

  it('get closes ancestor DOM element', () => {
    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')
  });

  it('eq() to retrieve specific element', () => {
    cy.get('.traversal-drinks-list > *').eq(2).should('contain', 'Milk') //traversal-drinks-list > * --> star selects all of the elements
  });

  it('use filter() to retrieve specific element', () => {
    cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1') // filter only active button from all active
  });

  it('use find() to retrieve specific element', () => {
    cy.get('.traversal-pagination').find('li').find('a').should('have.length', '7')
  });

  it('use first() to retrieve specific element', () => {
    cy.get('.traversal-table > tbody > tr > td').first().should('contain', 'Andy')
  });

  it('use last() to retrieve specific element', () => {
    cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott')
  });

  it('use nextall() to retrieve specific element', () => {
    cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', '3') // test prejde s '3' aj s 3
  });

  it('use nextUntil() to retrieve specific element', () => {
    cy.get('#coffee').nextUntil('#milk')
  });

  it('use not() to retrieve specific element', () => {
    cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled')
  });

  it('use prev() to retrieve specific element', () => {
    cy.get('#sugar').prev().contains('Espresso')
  });

  it('use prevAll() to retrieve specific element', () => {
    cy.get('.sales').prevAll().should('have.length', '2') //works with '2'
    cy.get('.sales').prevAll().should('have.length', 2) //works with 2
  });

  it('use prevUntil() to retrieve specific element', () => {
    cy.get('#veggie').prevUntil('#fruits').should('have.length', '5')
  });

});
