

/// <reference types="Cypress" />

describe('iterate through radio button',()=>{
    it ('verify radio buttons',()=>{
    
   // cy.visit('https://www.letskodeit.com/practice')

//cy.get('#hide-textbox').trigger('focus',20,40,{force:true})
//cy.get('#hide-textbox').trigger('click',20,40,{force:true})

//cy.get('#mousehover').trigger('mouseover')
//cy.get("div.mouse-hover-content a[href='#top']").click({force:true});

//cy.visit('https://www.amazon.in/')
//cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')
//cy.get("div[id='nav-flyout-ya-signin'] span[class='nav-action-inner']").click()

//cy.visit('https://www.flipkart.com/')
//cy.get('._1_3w1N').click()
cy.visit('https://www.ebay.com/')
cy.get("a[title='My eBay']").click()


    })
})
