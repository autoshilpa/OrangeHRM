/// <reference types="Cypress" />

import  login from "./PageObjects/testlogin1.js"

describe('verify pom',()=>{
    it('verify pomdemo1',()=>{
const ln=new login();
ln.visit();
ln.username();
ln.password();
ln.submit();
cy.get("p[class='has-text-align-center'] strong").contains("Congratulations student. You successfully logged in!")
cy.get('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click()

    })
})
