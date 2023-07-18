/// <reference types="Cypress" />

describe('iterate through radio button',()=>{
it ('verify radio buttons',()=>{

    //cy.visit('https://www.letskodeit.com/practice')
    //cy.get("[type='radio']").should('be.visible').click({multiple:true});




       // cy.get('#enabled-example-input').should('be.enabled').type('abhc');
        //cy.get('#disabled-button').click()
        //cy.get('#enabled-example-input').should('be.disabled');

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.fixture('login.json').then((data) =>{
         data.forEach((userdata)=>{

   
            cy.get("input[name='username']").type (userdata.username);
            cy.get("#password").type(userdata.password);
            cy.get('#submit').click();
            if(userdata.username=='student'&& userdata.username=='Password123')
            {
               cy.get('.post-title').should(have.text,'Logged In Successfully')
               cy.get('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color')
            .click()
         }  
else
{
   cy.get('#error').should('have.text','Your username is invalid!')
        }
    })



   })
})
})

