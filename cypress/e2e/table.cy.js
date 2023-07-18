describe('verify table scenarios',()=>{
    it('verify table tc',()=>{
//cy.visit('https://www.letskodeit.com/practice')
// to find the value presence anywhere in the table
//cy.get('#product').contains('td','30').should('be.visible')

// to find the value presence in a specific row and a specific coloumn
//cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(12) > div:nth-child(2) > fieldset:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2').contains('JavaScript Programming Language').should('be.visible')
cy.visit('https://testautomationpractice.blogspot.com/')
// verify the book name is 'master in java' author is amod

cy.get('')

    })

})