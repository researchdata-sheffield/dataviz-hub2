describe('Open website', () => {

  it('visit about', () => {
    cy.visit('/')
      .contains("About")
      .click()

    cy.url().should('include', '/about')
  })

})
