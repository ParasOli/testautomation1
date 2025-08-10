describe("Login Page", () => {

  beforeEach(() => {
    cy.visit('/')
  })
  
  it("Validate login with the correct credentials", () => {
    cy.get("#user-name").type(Cypress.env('USERNAME'))
    cy.get('[data-test="password"]').type(Cypress.env('PASSWORD'))
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
  })

  it("Validate the login error with empty credentials", () => {
    cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
  })

  it("Validate the login error with incorrect credentials", () => {
    cy.get("#user-name").type(Cypress.env('USERNAME'))
    cy.get('[data-test="password"]').type("wrong_password")
    cy.get('[data-test="login-button"]').click()
    cy.get("[data-test='error']").should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it("Validate the filter",()=>{
    cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.get('.product_sort_container').select('hilo')
  })
})
