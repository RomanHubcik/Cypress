/// <reference types="cypress" />

describe('Mouse actions', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com')
  })

  it('drang and drop item', () => {
    cy.get('#actions').scrollIntoView() //can scroll element into view
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true}) //scroll into view and click
    cy.get('#draggable').trigger('mousedown', {which: 1}) // drag the draggable element (on mouse down)
    cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true}) //drop the element (mouse up) once is over the element (mouse move)
  });

  it('double click', () => {
    cy.get('#actions').scrollIntoView() //can scroll element into view
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true}) //scroll into view and click
    cy.get('#double-click').dblclick() // double click
  });
});
