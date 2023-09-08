describe('My app', () => {
  it('should load main page', () => {
    cy.visit(' http://localhost:5173/')
  })

  it('should show login text, given the user is not logged in', () => {
    cy.visit('http://localhost:5173/')
    cy.contains(/welcome/i)
    cy.contains(/login/i)
  })


  it.only('should show login form, given the user clicked Login', () => {
    cy.visit('http://localhost:5173/')
    cy.contains(/welcome/i)
    cy.contains(/login/i)
    cy.get('.login').click()
    cy.get('.form').should('exist')
  })
 




  // program to interface
  // it('should be able to login, given the credentials are valid', () => {
  //   cy.visit('http://localhost:5173/')
  //   cy.get('.')
  // })

})


// SELECTORS
// https://docs.cypress.io/api/utilities/$#Selector
