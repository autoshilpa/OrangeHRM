describe ('verify alert scenarios',()=>{
    it('verify pop up alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

    // for validation the alert message
    cy.on('window:alert',(t)=>{
        expect(t).to.contains('I am a JS Alert');
    })

    })


    it.skip('verify confirm box',()=>{
        cy.on('window:Confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');

    })

    it.skip('verify prompt box',()=>{

    })
})
