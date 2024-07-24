describe('Admin Journey - Add Customer by Admin', function () {

    beforeEach(function () {
        cy.viewport(1440, 990);
        cy.visit(Cypress.env('baseUrl') + '/login/')
        cy.fixture('locators/selectors').then(function (sel) {
            cy.adminUserLogin(sel.adminLoginFields, Cypress.env('adminEmail'),
                Cypress.env('adminPassword'), sel.adminLoginButton)
            this.sel = sel;
        })
        cy.fixture('admin/customerData').then(function (cus) {
            this.cus = cus;
        })
    });

    it('Should Admin be able to add a new customer', function () {
        cy.clickElement(this.sel.adminCustomersTab)
        cy.clickElement(this.sel.adminAddNewCustomerButton)

        const formData: FormInputData = {
            firstName: this.cus.cusFirstName,
            lastName: this.cus.cusLastName,
            email: this.cus.cusEmail,
            phoneNumber: this.cus.cusPhoneNumber,
            location: this.cus.cusLocation,
            password: this.cus.cusPassword,
            confirmPassword: this.cus.cusConfirmPassword
        };

        cy.addCustomerForm(formData, this.sel.customerFormFields, this.sel.addCustomerButton);
    })
})    