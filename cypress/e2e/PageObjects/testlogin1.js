class login{
visit()
{
    cy.visit('https://practicetestautomation.com/practice-test-login/')
}

username()
{
    cy.get('#username').type('student')
}
password()
{
    cy.get('#password').type('Password123')
}
submit()
{
    cy.get('#submit').click()
}
}
export default login;
