class adminLoginPage {
    getEmailBox() { return cy.get('#input-0') }

    getPasswordBox() { return cy.get('#input-2') }

    getLogInButton() { return cy.get('button[type="button"]') }

    getLoginErrorMessage() { return cy.get('.login__error-message') }
}

export default adminLoginPage