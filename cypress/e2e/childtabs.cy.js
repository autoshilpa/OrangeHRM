/// <reference types="Cypress" />
describe ('verify child tab use case',()=>{
    it.skip ('verify child tab',()=>{

        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url('https://www.letskodeit.com/courses').should('include','/courses')

    })

    // https://testersdock.com/cypress-new-window/--- refer this url for more information
    it('Handling new Browser Window', function() {
        cy.visit('https://alapanme.github.io/testing-cypress.html')
        cy.window().then((win) => {
          cy.stub(win, 'open', url => {
            win.location.href = 'https://the-internet.herokuapp.com/';
          }).as("popup")
        })
        cy.get('button').click()
        cy.get('@popup')
          .should("be.called")
        cy.get('h1')
          .should('have.text', 'Welcome to the-internet')
      })
})