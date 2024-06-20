class loginPage {
    elements ={
    firstName : () =>  cy.get('[placeholder="First Name"]'),
    lastName : () => cy.get('[placeholder="Last Name"]'),
    email : () =>  cy.get('[placeholder="Email"]'),
    password : () =>  cy.get('[placeholder="New Password"]'),
    checkBox : () => cy.get('[type="checkbox"]'),
    submitButton : () =>  cy.get('[type="submit"]'),
    headerCheck : () => cy.get('.header__container')
    

    }
    login(firstName, lastName,emailAdd, password){
        this.elements.firstName().type(firstName)
        this.elements.lastName().type(lastName)
        this.elements.email().type(emailAdd)
        this.elements.password().type(password)
        this.elements.checkBox().check()
        this.elements.submitButton().click()
        cy.wait(2000)
        this.elements.headerCheck().should('include.text', firstName)
      
    }

}
module.exports = new loginPage()