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

  it('can add new todo items', () => {
    // We'll store our item text in a variable so we can reuse it
    const newItem = 'Feed the cat'
    const newItem2 = 'Buy the book'

    // get the input element and use the `type` to input new list item. 
    // need to type the enter key as well in order to submit the input.
    // best practices: https://on.cypress.io/selecting-elements
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
    cy.get('[data-test=new-todo]').type(`${newItem2}{enter}`)

    // check if values were actually added to the list.
    // newest item should exist as the last element in the list.
    // we can check number of items and what is the last one in a single statement.
    cy.get('.todo-list > li') // ">" = child item "space" = descendant item, "+" should be for sibling element
      .should('have.length', 4)
      .first()
      .should('have.text', 'Pay electric bill')

    cy.get('.todo-list > li')
      .last()
      .should('have.text', newItem2) // check if item has right label
      .invoke('text').should('have.length', 12) // check text length
  })


  it('can check off an item as completed', () => {
    // `get` command to get an element by selector,
    // `contains` command to get an element by its contents.
    // traverse DOM and find parent/input
    cy.contains('Pay electric bill')
      .parent()  // one level up from label to the input type = checkbox
      .find('input[type=checkbox]')
      .check() // check the checkbox
      .should('be.checked') // assert the checkbox is checked

    // check if element is marked as completed (traverse DOM)
    // Once we get that element, we can assert that it has the completed class.
    cy.contains('Pay electric bill')
      .parents('li') // traverse from label up in DOM till find "li" - many levels up
      .should('have.class', 'completed')
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

    it('can filter for completed tasks', () => {
      // We can perform similar steps as the test above to ensure
      // that only completed tasks are shown
      cy.contains('Completed').click()

      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')

      cy.contains('Walk the dog').should('not.exist')
    })

    it('can delete all completed tasks', () => {
      // First, let's click the "Clear completed" button
      // `contains` is actually serving two purposes here.
      // First, it's ensuring that the button exists within the dom.
      // This button only appears when at least one task is checked
      // so this command is implicitly verifying that it does exist.
      // Second, it selects the button so we can click it.
      cy.contains('Clear completed').click()

      // Then we can make sure that there is only one element
      // in the list and our element does not exist
      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')

      // Finally, make sure that the clear button no longer exists.
      cy.contains('Clear completed').should('not.exist')
    })
  })
})
