/// <reference types="cypress" />

describe('Handling data', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click({force:true})
  })

  it('Example1 - calculate total age of all users in the table', () => {

    var userDetails = []  // initialize epmty field
    let numb = 0 // this variable is limited --> in scope to this block

    cy.get('#thumbnail-1 td').each(($el, index, $list) => {
      userDetails[index] = $el.text() // extract text from all the rows in the table
    
    }).then(() => {
      var i // practicaly global variable
      for(i = 0; i < userDetails.length; i++) { // increment, do loop, until i is smaller than length of userDetails field
        if(Number(userDetails[i])) {
          numb += Number(userDetails[i]) // will pass userDetails only if "i" elem is number and add them 
        }
      }

      cy.log("Total age is " + numb)  
      expect(numb).to.eq(322) 
    })
  });

  //cy.get('#t02 > tbody > :nth-child(4) > :nth-child(2)')
  //cy.get('#thunbnail-1 tr td:nth-child(2)')

  it.only('Example2 - calculate age based on last name', () => {
    cy.get('#t02 > tbody > :nth-child(4) > :nth-child(2)').each(($el, index, $list) => {
      const text = $el.text()
      if(text.includes("Woods")) {
        cy.get('#t02 > tbody > :nth-child(4) > :nth-child(2)').eq(index).next().then(function(age) {
          const userAge = age.text()
          expect(userAge).to.equal("80")
        })
      }
    })
  });
});
