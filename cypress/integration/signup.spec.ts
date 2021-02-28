/// <reference types="cypress" />

describe('Sign Up Spec', () => {
  it('Should render error with invalid input for email field', () => {
    cy.visit('http://localhost:4000/sign-up');
    cy.get('[data-cy="signup-input-email"]').type('invalid_emailtest.com');
    // cy.get('[data-cy="signup-input-password"]').type('invalid_password');
    cy.get('Button').click();
    cy.contains('email must be an email', { matchCase: false });
  });
  it('Should render error with invalid phone number input field', () => {
    cy.visit('http://localhost:4000/sign-up');
    cy.get('[data-cy="signup-input-phone"]').type('123456');
    cy.get('Button').click();
    cy.contains('phoneNumber must be a valid phone number', { matchCase: false });
  });
  it('Should render error with empty input for last name field', () => {
    cy.visit('http://localhost:4000/sign-up');
    cy.get('[data-cy="signup-input-lname"]');
    cy.get('Button').click();
    cy.contains('lastName should not be empty', { matchCase: false });
  });
  it('Should render error with empty input for first name field', () => {
    cy.visit('http://localhost:4000/sign-up');
    cy.get('[data-cy="signup-input-fname"]');
    cy.get('Button').click();
    cy.contains('firstName should not be empty', { matchCase: false });
  });
  it('Should render error with empty input for password field', () => {
    cy.visit('http://localhost:4000/sign-up');
    cy.get('[data-cy="signup-input-email"]').type('invalid_emailtest.com');
    // cy.get('[data-cy="signup-input-password"]').type('invalid_password');
    cy.get('Button').click();
    cy.contains('email must be an email', { matchCase: false });
  });
});
