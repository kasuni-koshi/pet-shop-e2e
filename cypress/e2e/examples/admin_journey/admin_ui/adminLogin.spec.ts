describe('Admin Journey - Login to Pet Shop Admin Portal', function () {

    beforeEach(function () {
        cy.visit(Cypress.env('baseUrl') + '/login/')
        cy.fixture('loginData').then(function (data) {
            this.data = data;
        })
        cy.fixture('selectors').then(function (sel) {
            this.sel = sel;
        })
    });

    it('Should Admin able to login using valid email and valid password', function () {
        cy.typeText(this.sel.adminLoginEmailField, Cypress.env('adminEmail'))
        cy.typeText(this.sel.adminLoginPasswordField, Cypress.env('adminPassword'))
        cy.clickButton(this.sel.adminLoginButton)
        cy.contains('LOGOUT').should('be.visible');

    })

    it('Should Admin not able to login using invalid email and valid password', function () {
        cy.typeText(this.sel.adminLoginEmailField, this.data.invalidEmail)
        cy.typeText(this.sel.adminLoginPasswordField, Cypress.env('adminPassword'))
        cy.clickButton(this.sel.adminLoginButton)
        cy.get(this.sel.adminFailedLoginMessage).then(function (loginError) {
            const actualMessage = loginError.text()
            expect(actualMessage.includes(this.data.expectedMessage)).to.be.true
        })
    })

    it('Should Admin not able to login using valid email and invalid password', function () {
        cy.typeText(this.sel.adminLoginEmailField, Cypress.env('adminEmail'))
        cy.typeText(this.sel.adminLoginPasswordField, this.data.invalidPassword)
        cy.clickButton(this.sel.adminLoginButton)
        cy.get(this.sel.adminFailedLoginMessage).then(function (loginError) {
            const actualMessage = loginError.text()
            expect(actualMessage.includes(this.data.expectedMessage)).to.be.true
        })
    })

    it('Should Admin not able to login using invalid email and invalid password', function () {
        cy.typeText(this.sel.adminLoginEmailField, this.data.invalidEmail)
        cy.typeText(this.sel.adminLoginPasswordField, this.data.invalidPassword)
        cy.clickButton(this.sel.adminLoginButton)
        cy.get(this.sel.adminFailedLoginMessage).then(function (loginError) {
            const actualMessage = loginError.text()
            expect(actualMessage.includes(this.data.expectedMessage)).to.be.true
        })
    })

})