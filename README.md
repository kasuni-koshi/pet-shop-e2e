# [Pet Shop](https://pet-shop.buckhill.com.hr/) User Journey Testing

This repository contains automated tests for the Pet Shop Web Application using Cypress and TypeScript.

## Table of Contents

- [Pet-Shop Automated Tests.](#pet-shop-automated-tests)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the tests](#running-the-tests)
    - [Locally](#locally)
    - [In the CI](#in-the-ci)
  - [Folder Structure](#folder-structure)

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