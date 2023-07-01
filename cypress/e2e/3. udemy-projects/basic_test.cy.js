/// <reference types="cypress" />

// Welcome to Cypress!
//
// To learn more about how Cypress works:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // tell it to visit our website with the `cy.visit()` command.
      // include it in beforeEach function so that it runs before each test
      cy.visit('https://example.cypress.io/todo')
    })
  
    it('displays two todo items by default', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      // Then, we use `should` to assert that there are two matched items,
      // which are the two default items.
      cy.get('.todo-list li').should('have.length', 2)
  
      // We use the `first` and `last` functions
      // to get just the first and last matched elements individually,
      // and then perform an assertion with `should`.
      cy.get('.todo-list > li').first().should('have.text', 'Pay electric bill') // check if first item in list is "Pay electric bill"
      cy.get('.todo-list > li').first().invoke('text').should('have.length', 17) // check if "Pay electric bill has 17 letters"
      cy.get('.todo-list li').next().should('have.text', 'Walk the dog') // as there are only 2 elem. next should have same result as last
      cy.get('.todo-list > li').last().should('have.text', 'Walk the dog')
    })  
  
    context('with a checked task', () => {
      beforeEach(() => {
        // nested beforeEach - to have always checked this item before this set of tests starts
        cy.contains('Pay electric bill')
          .parent()
          .find('input[type=checkbox]')
          .check()  // use .uncheck() to simply uncheck the checkbox
      })
  
      it('can filter for uncompleted tasks', () => {
        // click on the "active" button (display only incomplete items)
        cy.contains('Active').click() // find button only by "contains"
          .wait(2000)
  
        // After filtering, we can assert that there is only the one
        // incomplete item in the list.
        cy.get('.todo-list li')
          .should('have.length', 1)
          .first()
          .should('have.text', 'Walk the dog')
  
        // For good measure, let's also assert that the task we checked off
        // does not exist on the page.
        cy.contains('Pay electric bill').should('not.exist')
      })
    })
  })
  