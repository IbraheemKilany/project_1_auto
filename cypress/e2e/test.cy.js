/// <reference types="cypress"/>
describe('aspaire test case', () => {
  it.skip('check the currency is sar', () => {
    cy.visit('https://www.almosafer.com/en')
    cy.get('.cta__saudi') .click()
    cy.get('[data-testid="Header__CurrencySelector"]').invoke("text").should("include","SAR")
  })
  it('to check language', () => {
    cy.visit('https://www.almosafer.com/en')
    cy.get('.cta__saudi') .click()
    cy.get('html').should('have.attr','lang','en')
  });
})