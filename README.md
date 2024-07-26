# [Pet Shop](https://pet-shop.buckhill.com.hr/) Admin / User Journey Testing

This repository contains automated tests for the Pet Shop Web Application using Cypress and TypeScript.

## Table of Content

- [Pet-Shop Automated Tests.](#pet-shop-automated-tests)
  - [Table of Content](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the tests](#running-the-tests)
    - [Locally](#locally)
    - [In the CI](#in-the-ci)
  - [Folder Structure](#folder-structure)
  - [Test Cases](#test-cases)

## Prerequisites

Before you begin, ensure you have the following:

- Node.js and npm installed (latest recommended)
- Git (optional, but recommended)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/kasuni-koshi/pet-shop-e2e.git
   ```

2. Go inside the project folder:

   ```bash
   cd pet-shop-e2e
   ```

3. Install the dependencies:

   ```bash
    npm install
   ```

3. Install the dependencies:

   ```bash
    npm install
   ```

## Running the Tests

### Locally

To run all the tests in headless mode on chrome browser:

```bash
npm run test:chrome
```

To run all the tests in headed mode on chrome browser:

```bash
npm run cy:open
```

The following environment variables are required to run the tests and have already been configure in the [.env](.env) file

- BASE_URL= 'https://pet-shop.buckhill.com.hr'
- API_URL = 'https://pet-shop.buckhill.com.hr/api/v1'
- ADMIN_EMAIL="admin@buckhill.co.uk"
- ADMIN_PASSWORD="admin"

### In the CI

The project contains a [Github Actions](https://github.com/features/actions) workflow that run the test in the CI.[cypress.yml](.github/workflows/cypress.yml)

## Folder Structure

- `bugs/` - Contains bug reports found during testing
- `cypress/` - Contains all Cypress-related configuration, tests, and assets
- `e2e/` - Contains the test files
- `fixtures/` - Contains test data files in JSON format
- `support/` - Contains code that runs before each test file such as custom commands
- `node_modules/` - Contains all the dependencies installed for the project, including Cypress and any other npm packages
- `.env` - Environment configuration
- `cypress.config.ts` - Main configuration file for Cypress
- `package-lock.json` - Automatically generated file that locks the versions of the project’s dependencies
- `package.json` - Contains metadata about the project, including the project's name, version, dependencies, and scripts. 
- `tsconfig.json` - Specify compiler options and determine the root files and the types of the project
- `README.md` - Provide an overview of the project, instructions for setup and use, and other relevant documentation.

## Test Cases

### Pet Shop - Admin Journey - Admin Login
|Test Case No|Test Case Description|Pre-Conditions|Test Steps|Test Data|Expected Result|
| :---: | :--- | :--- | :--- | :--- | :--- |
|1|Login successfully as an Admin to Admin Application with valid email and password|N/A|1. Navigate to the URL: https://pet-shop.buckhill.com.hr/login<br>2. Enter Email Address<br>3. Enter Password<br>4. Click on Log in Button|Email: admin@buckhill.co.uk<br>Password: admin|Admin should be able to login to Admin Application successfully
|2|Login to Admin Application with invalid email and valid password|N/A|1. Navigate to the URL: https://pet-shop.buckhill.com.hr/login<br>2. Enter Email Address<br>3. Enter Password<br>4. Click on Log in Button|Email: invalidmain@gmail.com<br>Password: admin|"Failed to authenticate user" error message should be appered under the login button
|3|Login to Admin Application with valid email and invalid password|N/A|1. Navigate to the URL: https://pet-shop.buckhill.com.hr/login<br>2. Enter Email Address<br>3. Enter Password<br>4. Click on Log in Button|Email: admin@buckhill.co.uk<br>Password: invalid|"Failed to authenticate user" error message should be appered under the login button
|4|Login to Admin Application with invalid email and invalid password|N/A|1. Navigate to the URL: https://pet-shop.buckhill.com.hr/login<br>2. Enter Email Address<br>3. Enter Password<br>4. Click on Log in Button|Email: invalidmain@gmail.com<br>Password: invalid|"Failed to authenticate user" error message should be appered under the login button

### Pet Shop - Admin Journey - Add Customer by Administrator
|Test Case No|Test Case Description|Pre-Conditions|Test Steps|Test Data|Expected Result|
| :---: | :--- | :--- | :--- | :--- | :--- |
|1|Adding a New Customer to the System by Administrator|Admin account should be available with valid credentials|1. Navigate to the URL: https://pet-shop.buckhill.com.hr/login<br>2. Enter Email Address<br>3. Enter Password<br>4. Click on Log in Button<br>5. Click on Cutomers Tab<br>6. Click on Add New Customer button<br>7. Enter First Name<br>8. Enter Last Name<br>8. Enter Email<br>9. Enter Phone Number<br>10. Enter Location<br>11. Enter Password<br>12. Repeat Password in Confirm Password<br>13. Click on Add New Customer button|First Name: John<br>Last Name: Doe<br>Email: johndoe@example.com<br>Phone Number: +44374848983<br>Location: 123 Fake Street, Springfield, London, United Kingdom<br>Password: Test@123<br>Confirm Password: Test@123|Add new customer popup should be closed after clicked on Add New Customer button. Newly added customer should be displayed on the top of the Customers List

### Pet Shop - Admin Journey - Add Customer by Administrator
|Test Case No|Test Case Description|Pre-Conditions|Test Steps|Test Data|Expected Result|
| :---: | :--- | :--- | :--- | :--- | :--- |
|1|New User Sign Up to User Application|N/A|1. Navigate to the URL: https://pet-shop.buckhill.com.hr<br>2. Click on Login button<br>3. Click on 'Don't have an account? Sign up' Link<br>4. Enter First Name<br>5. Enter Last Name<br>6. Enter Email<br>7. Enter Phone Number<br>8. Enter Location<br>9. Enter Password<br>10. Repeat Password in Confirm Password<br>11. Click on User Consent Checkbox<br>Click on Sign Up button|First Name: John<br>Last Name: Doe<br>Email: johndoe@example.com<br>Phone Number: +44374848983<br>Location: 123 Fake Street, Springfield, London, United Kingdom<br>Password: Test@123<br>Confirm Password: Test@123|Sign Up popup should be closed after clicked on Sign Up button. User should be able to login to User Application using newly created account