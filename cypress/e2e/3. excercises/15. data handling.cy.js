/// <reference types="cypress" />

describe('Handling data', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click({force:true})
  })

  it('Example1 - calculate total age of all users in the table', () => {

    var userDetails = []  // initialize epmty field
    let numb = 0 // this variable is limited --> in scope to this block

    cy.get('#thumbnail-1 td').each(($el, index, list) => {
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
});
