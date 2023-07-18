/// <reference types="Cypress" />

import login from "./PageObjects/loginpage"

describe('POM pattern 1',()=>{

    it('demo POM pattern1',()=>{

        const ln=new login();
        ln.visit();
        ln.email();
        ln.password();
        ln.login();
        
    })
})










