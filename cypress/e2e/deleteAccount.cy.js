/// <reference types="cypress" />
describe('Testando Exclusão de Usuário', () => {

  it('1 - Usuário faz login com username e senha válidos', () => {
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').click();
    cy.contains('Login to your account');

    cy.get('[data-qa="login-email"]').type('testecypress14.09@email.com');
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"]').contains('Login').click();
    cy.contains('Logged in as Teste Cypress').should('be.visible');

    //Deletando conta de usuário
    cy.get('div.shop-menu').contains('Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').contains('Continue').click();
    cy.get('h1').should('contain.text', 'Automation');
    
  });
});