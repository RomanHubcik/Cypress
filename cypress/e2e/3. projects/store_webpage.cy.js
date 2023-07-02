/// <reference types="cypress" />

describe('Testing the simple form', () => {
    beforeEach(() => {
      cy.visit('https://automationteststore.com/')
    })  
    it('Click on contact', () => {
      cy.get('.info_links_footer > :nth-child(5) > a').click()
      cy.get('#ContactUsFrm_first_name').type('Firstname Lastname')
      cy.get('#ContactUsFrm_email').type('my@email.com')
      cy.get('#ContactUsFrm_enquiry').type('here is some question maybe.')
      cy.get('.col-md-6 > .btn').click()
    });
  });
  