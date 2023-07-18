
/// <reference types="Cypress" />
class login

{
    visit()
    {
       cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F') 
    }

email()
{
    cy.get('#Email').clear().type('admin@yourstore.com')
}

password()
{
    cy.get('#Password').clear().type('admin')
}

login()
{
    cy.get("button[type='submit']").click()
}
}

export default login;




