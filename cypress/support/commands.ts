/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('clickButton', function (button) {
    cy.get(button).should('exist').click()
})

Cypress.Commands.add('typeText', function (inputField, text) {
    cy.get(inputField).should('exist').type(text)
})

Cypress.Commands.add('adminLogin', function (emailField, email, passwordField, password, loginButton) {
    cy.get(emailField).should('exist').type(email)
    cy.get(passwordField).should('exist').type(password)
    cy.get(loginButton).should('exist').click()
})

declare namespace Cypress {
    interface Chainable {
        clickButton(button: string): Chainable<void>

        typeText(inputField: string, text: string): Chainable<void>

        adminLogin(emailField: string, email: string, passwordField: string, password: string, loginButton: string): Chainable<void>
    }
}