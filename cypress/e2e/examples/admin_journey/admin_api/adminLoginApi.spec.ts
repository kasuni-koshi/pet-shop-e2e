describe('Admin APIs - Admin User Login API', function () {

    var formData = new FormData()

    it('successfull login on Admin login API using valid email and valid password', function () {
        formData.append('email', Cypress.env('adminEmail'))
        formData.append('password', Cypress.env('adminPassword'))

        cy.adminLoginApi('/admin/login', formData)
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('failed login Unprocessable Content', function () {

        cy.fixture('admin/loginData').then(function (data) {
            formData.append('email', 'data.invalidEmail')
            formData.append('password', 'data.invalidPassword')
        })

        cy.adminLoginApi('/admin/login', formData)
            .then((response) => {
                expect(response.status).to.eq(422)
            })
    })
})