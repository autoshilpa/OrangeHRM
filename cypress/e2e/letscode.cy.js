/// <reference types="Cypress" />

describe('lets code scenarios',()=>{
    it('verify check boxes buttons',()=>{
        cy.visit('https://www.letskodeit.com/practice')
       // cy.get("[name='cars'][type='checkbox']").eq(1).check().should('be.checked');

       cy.get('#mousehover').invoke('show')
    })


it.skip('drop downs',()=>{

    //cy.visit('https://www.letskodeit.com/practice')
    //cy.get("[name='cars'][type='checkbox']").check();

   //cy.get('#carselect').select('Benz').should('have.value','benz') //using select tag

   //cy.get('#multiple-select-example').contains('Orange').click()// using multi select

/*cy.visit('https://www.wikipedia.org/')
cy.get('#searchInput').type('Delhi')
cy.get('div.suggestions-dropdown').contains('Delhi University').click()*/

})

})



