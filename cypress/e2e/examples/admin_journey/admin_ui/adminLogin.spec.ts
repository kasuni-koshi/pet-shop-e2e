import adminLoginPage from "../../../pageObjects/adminLoginPage"

describe('Admin Journey - Login to Pet Shop Admin Portal', function () {

    beforeEach(function () {
        cy.visit(Cypress.env('baseUrl') + '/login/')
        cy.fixture('loginData').then(function (data) {
            this.data = data;
        })
    });

    it('Should Admin able to login using valid email and valid password', function () {
        const adminLogin = new adminLoginPage()

        adminLogin.getEmailBox().type(Cypress.env('adminEmail'))
        adminLogin.getPasswordBox().type(Cypress.env('adminPassword'))
        adminLogin.getLogInButton().click()
        cy.contains('LOGOUT').should('be.visible');

    })

    it('Should Admin not able to login using invalid email and valid password', function () {
        const adminLogin = new adminLoginPage()

        adminLogin.getEmailBox().type(this.data.invalidEmail)
        adminLogin.getPasswordBox().type(Cypress.env('adminPassword'))
        adminLogin.getLogInButton().click()
        adminLogin.getLoginErrorMessage().then(function (loginError) {
            const actualMessage = loginError.text()
            expect(actualMessage.includes(this.data.expectedMessage)).to.be.true
        })
    })

    it('Should Admin not able to login using valid email and invalid password', function () {
        const adminLogin = new adminLoginPage()

        adminLogin.getEmailBox().type(Cypress.env('adminEmail'))
        adminLogin.getPasswordBox().type(this.data.invalidPassword)
        adminLogin.getLogInButton().click()
        adminLogin.getLoginErrorMessage().then(function (loginError) {
            const actualMessage = loginError.text()
            expect(actualMessage.includes(this.data.expectedMessage)).to.be.true
        })
    })

    it('Should Admin not able to login using invalid email and invalid password', function () {
        const adminLogin = new adminLoginPage()

        adminLogin.getEmailBox().type(this.data.invalidEmail)
        adminLogin.getPasswordBox().type(this.data.invalidPassword)
        adminLogin.getLogInButton().click()
        adminLogin.getLoginErrorMessage().then(function (loginError) {
            const actualMessage = loginError.text()
            expect(actualMessage.includes(this.data.expectedMessage)).to.be.true
        })
    })

})