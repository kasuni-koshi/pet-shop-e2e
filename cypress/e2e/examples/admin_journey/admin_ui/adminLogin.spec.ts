describe('Admin Journey - Login to Pet Shop Admin Portal', function () {

    beforeEach(function () {
        cy.visit(Cypress.env('baseUrl') + '/login/')
        cy.fixture('admin/loginData').then(function (data) {
            this.data = data;
        })
        cy.fixture('locators/selectors').then(function (sel) {
            this.sel = sel;
        })
    })

    it('Should Admin able to login using valid email and valid password', function () {

        cy.adminUserLogin(this.sel.adminLoginFields, Cypress.env('adminEmail'),
            Cypress.env('adminPassword'), this.sel.adminLoginButton)

        cy.contains('LOGOUT').should('be.visible');

    })

    it('Should Admin not able to login using invalid email and valid password', function () {

        cy.adminUserLogin(this.sel.adminLoginFields, this.data.invalidEmail,
            Cypress.env('adminPassword'), this.sel.adminLoginButton)

        cy.get(this.sel.adminFailedLoginMessage).then(function (loginError) {
            const actualMessage = loginError.text()
            expect(actualMessage.includes(this.data.expectedMessage)).to.be.true
        })
    })

    it('Should Admin not able to login using valid email and invalid password', function () {

        cy.adminUserLogin(this.sel.adminLoginFields, Cypress.env('adminEmail'),
            this.data.invalidPassword, this.sel.adminLoginButton)

        cy.get(this.sel.adminFailedLoginMessage).then(function (loginError) {
            const actualMessage = loginError.text()
            expect(actualMessage.includes(this.data.expectedMessage)).to.be.true
        })
    })

    it('Should Admin not able to login using invalid email and invalid password', function () {

        cy.adminUserLogin(this.sel.adminLoginFields, this.data.invalidEmail,
            this.data.invalidPassword, this.sel.adminLoginButton)

        cy.get(this.sel.adminFailedLoginMessage).then(function (loginError) {
            const actualMessage = loginError.text()
            expect(actualMessage.includes(this.data.expectedMessage)).to.be.true
        })
    })

})