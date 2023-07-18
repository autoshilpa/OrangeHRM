describe('verify test data using fixtures',()=>{

    it('verify fixtures scenario',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
            cy.get("input[placeholder='Password']").type('admin123')
            cy.get("button[type='submit']").click();
            cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)').should('have.text','Time at Work')
            cy.get('.oxd-userdropdown-name').click();
            cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1').click();
    })
})
