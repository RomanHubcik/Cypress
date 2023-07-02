/// <reference types="cypress" />

describe('Testing the simple form', () => {
    beforeEach(() => {
      cy.visit('https://automationteststore.com/')
    })  
    it('Fill the formular using CSS selectors', () => {
      // cy.get('.info_links_footer > :nth-child(5) > a').click() // autimaticaly found by cypress, not always optimal
      cy.get('a[href$="contact"]').click() // better option for the link. href$ search for end text, href^ is for text it start with
      cy.get('#ContactUsFrm_first_name').type('Firstname Lastname')
      cy.get('#ContactUsFrm_email').type('my@email.com')
      cy.get('#ContactUsFrm_enquiry').type('here is some question maybe.')
      // cy.get('.col-md-6 > .btn').click()
      cy.get('button[title="Submit"]').click() // better option for button
    });
    it('Fill the formular using XPath selectors', () => {
      cy.xpath('//a[contains(@href, "contact")]').click()
      cy.xpath('//input[@name="first_name"]').type('Xpathname')
      cy.xpath('(//input[@name="email"])[1]').type('Xpat@hmail.com')
      cy.xpath('//textarea[@name="enquiry"]').type('Xpathmessage')
      cy.xpath('(//button[@type="submit"])[1]').click()
    });
  });
  