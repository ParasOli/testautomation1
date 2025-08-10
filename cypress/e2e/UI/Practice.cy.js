
/// <reference types="cypress" />
import "cypress-file-upload";

describe("practice", () => {
it("attach file",()=>{
    cy.visit('https://testautomationpractice.blogspot.com/')
        console.log('Page loaded successfully')
        cy.get('#singleFileInput').attachFile('example.json')
        console.log('File attached successfully')
        cy.get('#singleFileForm > button').click()
})
})