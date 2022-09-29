/// <reference types="cypress" />

/*Funcionalidade: Cadastro
Eu como usuário do site Conexão QA
Quero fazer cadastro de novo usuário
Para ter acesso as funcionalidades do site
*/
const faker = require("faker-br");

describe('Funcionalidade: Cadastro', () => {
before(() => {
    cy.visit('Cadastrar') 
});
it('Deve fazer cadastro com sucesso', () => { 
cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Catyany')
cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('QA1213')
cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('QA1213')
cy.get('[data-test="register-submit"]').click()
cy.get('.large').should('contain', 'Dashboard')
    });
});

/* HOOK:
Antes de tudo: before
Antes de cada cenário: beforeEach
Depois de tudo: after
Depois de cada cenário: afterEach
*/
