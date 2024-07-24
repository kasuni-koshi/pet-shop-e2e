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

Cypress.Commands.add('clickElement', function (button) {
    cy.get(button).click()
})

Cypress.Commands.add('typeText', function (inputField, text) {
    cy.get(inputField).should('exist').type(text)
})


Cypress.Commands.add('adminUserLogin', function (loginFields, email, password, loginButton) {
    cy.get(loginFields).eq(0).should('exist').type(email)
    cy.get(loginFields).eq(1).should('exist').type(password)
    cy.get(loginButton).should('exist').click()
})

Cypress.Commands.add('addCustomerForm', function (data: FormInputData, cusFormField, addNewCusButton) {
    cy.get(cusFormField).eq(0).type(data.firstName)
    cy.get(cusFormField).eq(1).type(data.lastName)
    cy.get(cusFormField).eq(2).type(data.email)
    cy.get(cusFormField).eq(3).type(data.phoneNumber)
    cy.get(cusFormField).eq(4).type(data.location)
    cy.get(cusFormField).eq(5).type(data.password)
    cy.get(cusFormField).eq(6).type(data.confirmPassword)
    cy.get(addNewCusButton).click({ force: true })
});

Cypress.Commands.add('userSignUpForm', function (data: FormInputData, userFormField, userConsent, userSignUpButton) {
    cy.get(userFormField).eq(0).type(data.firstName)
    cy.get(userFormField).eq(1).type(data.lastName)
    cy.get(userFormField).eq(2).type(data.email)
    cy.get(userFormField).eq(3).type(data.phoneNumber)
    cy.get(userFormField).eq(4).type(data.location)
    cy.get(userFormField).eq(5).type(data.password)
    cy.get(userFormField).eq(6).type(data.confirmPassword)
    cy.get(userConsent).click()
    cy.get(userSignUpButton).click({ force: true })
});


interface FormInputData {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    location: string,
    password: string,
    confirmPassword: string
}

declare namespace Cypress {
    interface Chainable {
        clickElement(button: string): Chainable<void>

        typeText(inputField: string, text: string): Chainable<void>

        adminUserLogin(loginFields: string, email: string, password: string, loginButton: string): Chainable<void>

        addCustomerForm(data: FormInputData, cusFormField: string, addNewCusButton: string): Chainable<Element>

        userSignUpForm(data: FormInputData, userFormField: string, userConsent: string, userSignUpButton: string): Chainable<Element>

        adminLoginApi(endpoint: string, formData: FormData): Chainable<Cypress.Response<any>>

    }
}

Cypress.Commands.add('adminLoginApi', (endpoint: string, formData: FormData) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}${endpoint}`,
        body: formData,
        failOnStatusCode: false
    })
})