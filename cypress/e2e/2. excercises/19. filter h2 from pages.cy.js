/// <reference types="cypress" />

describe('Simple rss', () => {

  it('Mtbiker info', () => {

    cy.visit('https://www.mtbiker.sk/clanky')
    if (cy.get('.ml-sm-2 > .btn').contains('Súhlasím')) {
      cy.get('.ml-sm-2 > .btn').click()
    }
    cy.get('h2').invoke('text').then(($el) => {
      cy.writeFile('mtbiker.htm', $el + '\n', { flag: 'a+' })
    })
  });

  it('Mthiker info', () => {

    cy.visit('https://www.mthiker.sk/clanky')
    if (cy.get('.ml-sm-2 > .btn').contains('Súhlasím')) {
      cy.get('.ml-sm-2 > .btn').click()
    }
    cy.get('h2').invoke('text').then(($el) => {
      cy.writeFile('mtbiker.htm', $el + '\n', { flag: 'a+' })
    })
  });

  it('CNN info', () => {
    cy.visit('https://edition.cnn.com/')
    cy.get('h2').invoke('text').then(($el) => {
      cy.writeFile('mtbiker.htm', $el + '\n', { flag: 'a+' })
    })
    cy.get('span[data-editable=headline]').invoke('text').then(($el) => {
      cy.writeFile('mtbiker.htm', $el, { flag: 'a+' })
    })
  });

  it.only('BBC info', () => {
    cy.visit('https://www.bbc.com/news/uk')
    if (cy.get('.button-column > .sp_choice_type_11').contains('I agree')) {
      cy.get('.button-column > .sp_choice_type_11').click()
    }
    if (cy.get('#bbccookies-continue-button > [data-region-filter="eu"]').contains('I agree')) {
      cy.get('#bbccookies-continue-button > [data-region-filter="eu"]').click()
    }
    cy.get('h2').invoke('text').then(($el) => {
      cy.writeFile('mtbiker.htm', $el + '\n', { flag: 'a+' })
    })

  });

});