describe('User Journey - Pet Shop New User Sign Up', function () {

    beforeEach(function () {
        cy.visit(Cypress.env('baseUrl'))
        cy.fixture('locators/selectors').then(function (sel) {
            this.sel = sel;
        })
        cy.fixture('user/userData').then(function (user) {
            this.user = user;
        })
    });

    it('Should new user be able to signup to Pet Shop', function () {
        cy.clickElement(this.sel.userLoginButton)
        cy.clickElement(this.sel.userSignUpFormLink)

        const formData: FormInputData = {
            firstName: this.user.userFirstName,
            lastName: this.user.userLastName,
            email: this.user.userEmail,
            phoneNumber: this.user.userPhoneNumber,
            location: this.user.userLocation,
            password: this.user.userPassword,
            confirmPassword: this.user.userConfirmPassword
        };

        cy.userSignUpForm(formData, this.sel.userFormFields, this.sel.userConsentBox, this.sel.userSignUpButton);

        //Verify new user registration by login to Pet Shop
        cy.clickElement(this.sel.userLoginButton)

        cy.adminUserLogin(this.sel.userLoginFields, this.user.userEmail,
            this.user.userPassword, this.sel.userLoginFormButton)

        cy.contains('LOGOUT').should('be.visible');

    })
})    