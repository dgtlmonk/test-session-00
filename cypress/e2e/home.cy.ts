describe('My app', () => {
  it('should load main page', () => {
    cy.visit('http://localhost:8081/')
  })

  // test if welcome exits
  it('should have welcome', () => {
    cy.visit('http://localhost:8081/')
    cy.get('.welcome').should('exist')
    // cy.contains('Welcome')
    // cy.contains('Welcome')
  //   cy.contains(/login/i)
  })
})


// SELECTORS
// https://docs.cypress.io/api/utilities/$#Selector
