
/// <reference types="Cypress" />
describe('verify testlogin',()=>{
it('verify login with fixtures',()=>{
    
    cy.fixture("login.json").then((data)=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        data.forEach((userdata)=>{
cy.get('#username').type(userdata.username)
cy.get('#password').type(userdata.password)
cy.get('#submit').click();

if(userdata.username=="student" && userdata.password=="Password123")
{
    //cy.get("p[class='has-text-align-center'] strong").contains("Congratulations student. You successfully logged in!")
    cy.get('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click();
}
else{
    cy.get('#error').should('have.text','Your username is invalid!')
}
        })

    })




})



})