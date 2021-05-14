// Autocompletion for Cypress commands
/// <reference types="Cypress" />

describe('Open website', () => {

  it('visit about', () => {
    cy.visit('/')
      .get('.desktopHeader')
      .contains("About")
      .click()

    cy.url().should('include', '/about')
  })

})
