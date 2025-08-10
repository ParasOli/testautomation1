Cypress.Commands.add("login", (username, password) => {
  cy.get("#user-name").type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
})