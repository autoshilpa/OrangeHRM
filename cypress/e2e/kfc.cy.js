/// <reference types="Cypress" />
describe('verify kfc flow',()=>{
it('verify the item',()=>{
cy.visit('https://online.kfc.co.in/')

cy.get("a[data-testid='navItems-component-Menu'] button[class='header-item-buttons d-flex']").click()
//cy.get("div[class='large-category-name'] h2").should('have.text','LEG PIECE BUCKET OFFER')
//cy.get("button[aria-label='Add to Cart5 Leg Pc & 2 Dips Bucket']").click()

})


})