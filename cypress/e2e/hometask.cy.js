describe('verify add employee scenario',()=>{

    it('verify add employee scenario',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
            cy.get("input[placeholder='Password']").type('admin123')
            cy.get("button[type='submit']").click();
            cy.get ('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)').click();
            cy.get("header[class='oxd-topbar'] li:nth-child(3) a:nth-child(1)").click()
            cy.get("li[class='oxd-topbar-body-nav-tab --visited'] a[class='oxd-topbar-body-nav-tab-item']").click();
            cy.get("input[placeholder='First Name']").type('KIRAN')
            cy.get("input[placeholder='Last Name']").type('123')
            cy.get("button[type='submit']").click()
            cy.contains('Successfully Saved')
            cy.url().should('include','empNumber')
            cy.wait(3000);
            cy.get("li[class='oxd-topbar-body-nav-tab --visited'] a[class='oxd-topbar-body-nav-tab-item']").click();
            cy.get("input[placeholder='First Name']").type('ROHIT')
            cy.get("input[placeholder='Last Name']").type('1234')
            cy.get("button[type='submit']").click()
            cy.contains('Successfully Saved')
            cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/80').should('include','empNumber')
            cy.get("li[class='oxd-topbar-body-nav-tab --visited'] a[class='oxd-topbar-body-nav-tab-item']").click();
            cy.get("input[placeholder='First Name']").type('AJAY')
            cy.get("input[placeholder='Last Name']").type('12345')
            cy.get("button[type='submit']").click()
            cy.contains('Successfully Saved')
            cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/80').should('include','empNumber')

    })
})
