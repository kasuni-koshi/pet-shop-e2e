// cypress/support/utils.ts

/**
 * Generates a random email address.
 * @returns {string} Randomly generated email address.
 */
export function generateRandomEmail(): string {
    const randomString = Math.random().toString(36).substring(2, 11);
    return `${randomString}@example.com`;
  }