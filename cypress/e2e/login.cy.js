/// <reference types="cypress" />
describe('Testando Login de Usuário', () => {

  it('1 - Usuário faz login com username e senha válidos', () => {
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').click();
    cy.contains('Login to your account');

    cy.get('[data-qa="login-email"]').type('testecypress14.09@email.com');
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"]').contains('Login').click();
    cy.contains('Logged in as Teste Cypress').should('be.visible');
  });

  it('2 - Usuário faz login com username e senha inválidos', () => {
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').click();
    cy.contains('Login to your account');

    cy.get('[data-qa="login-email"]').type('testecypress15.09@email.com');
    cy.get('[data-qa="login-password"]').type('123');
    cy.get('[data-qa="login-button"]').contains('Login').click();
    cy.contains('Your email or password is incorrect!');
  });

    it('3 - Usuário faz login com username válido e senha inválida', () => {
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').click();
    cy.contains('Login to your account');

    cy.get('[data-qa="login-email"]').type('testecypress14.09@email.com');
    cy.get('[data-qa="login-password"]').type('123');
    cy.get('[data-qa="login-button"]').contains('Login').click();
    cy.contains('Your email or password is incorrect!');
  });

  it('4 - Usuário faz login com username inválido e senha válida', () => {
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').click();
    cy.contains('Login to your account');

    cy.get('[data-qa="login-email"]').type('testecypress15.09@email.com');
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"]').contains('Login').click();
    cy.contains('Your email or password is incorrect!');
  });
});