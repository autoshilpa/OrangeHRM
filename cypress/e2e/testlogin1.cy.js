/// <reference types="Cypress" />
describe('verify testlogin',()=>{
    it('verify login with fixtures',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();
        cy.get("p[class='has-text-align-center'] strong").contains("Congratulations student. You successfully logged in!")
    cy.get('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click()
    })
})

