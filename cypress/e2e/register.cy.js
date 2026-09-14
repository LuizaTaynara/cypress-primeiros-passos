/// <reference types="cypress" />
describe('Testando Registro de Usuário', () => {

  it('1 - Usuário faz registro com username e senha válidos', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('div.shop-menu').contains('Login').click();
    cy.contains('New User Signup!');

    //preencher dados iniciais
    cy.get('[data-qa="signup-name"]').type('Teste Cypress');
    cy.get('[data-qa="signup-email"]').type('testecypress14.09@email.com');
    cy.get('[data-qa="signup-button"]').contains('Signup').click();
    cy.contains('Enter Account Information');

    //Enter Account Information
    cy.get('#id_gender2').check().should('be.checked');
    cy.get('[data-qa="password"]').type('123456');
    cy.get('[data-qa="days"]').select('10').should('have.value','10');
    cy.get('[data-qa="months"]').select('April').should('have.value','4');
    cy.get('[data-qa="years"]').select('1990').should('have.value','1990');
    cy.get('[name="newsletter"]').check().should('be.checked');

    //Fill details: Address Information
    cy.get('[data-qa="first_name"]').type('Teste');
    cy.get('[data-qa="last_name"]').type('Cypress');
    cy.get('[data-qa="company"]').type('Teste Company');
    cy.get('[data-qa="address"]').type('Rua Teste, 12');
    cy.get('[data-qa="country"]').select('New Zealand').should('have.value','New Zealand');
    cy.get('[data-qa="state"]').type('Auckland');
    cy.get('[data-qa="city"]').type('Auckland');
    cy.get('[data-qa="zipcode"]').type('0600');
    cy.get('[data-qa="mobile_number"]').type('+64 21 123 4567');
    cy.get('[data-qa="create-account"]').contains('Create Account').click();

    //verificação de sucesso
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').contains('Continue').click();
    cy.contains('Logged in as Teste Cypress').should('be.visible');

  });

    it('2 - Usuário faz registro com email já existente', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('div.shop-menu').contains('Login').click();
    cy.contains('New User Signup!');

    //preencher dados iniciais
    cy.get('[data-qa="signup-name"]').type('Teste Cypress');
    cy.get('[data-qa="signup-email"]').type('testecypress14.09@email.com');
    cy.get('[data-qa="signup-button"]').contains('Signup').click();

    cy.contains('Email Address already exist!').should('be.visible');
  });
});

