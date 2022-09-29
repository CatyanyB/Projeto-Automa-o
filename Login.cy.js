/// <reference types="cypress" />

/*Funcionalidade: Login
Eu como usuário do sistema Conexão QA
Quero fazer login
Para fazer edições no meu perfil

Cenário 1: Validar login com sucesso
Arrange - Dado que acesso o site Conexão QA (Pré-requisito)
Action - Quando preencher campos de usuário e senha e clicar no botão "login" (Ação do usuário)
Assert - Então deve fazer login com sucesso (Resultado esperado)
*/
describe('Funcionalidade: Login', () => {
before(() => {
    cy.visit('login') 
});
it('Deve fazer login com sucesso', () => {
cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('testeQA@testando.com')
cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('QA1213')
cy.get('[data-test="login-submit"]').click()
cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Catyany')
});

it('Deve deslogar e logar novamente', () => {
cy.get('[data-test="navbar-logout"]').click()
cy.get('[data-test="landing-login"]').click()
});

/*Cenário 2: Validar usuário e senha inválidos
Dado que acesso site conexão QA
Quando preencher campos de usuário e senha incorretos
Então deve exibir mensagem de usuário e senha inválidos
*/
it('Deve exibir mensagem de erro de usuário e/ou senha invalidos', () => {
cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('testeQAas@testando.com')
cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('QA12asds13')
cy.get('[data-test="login-submit"]').click()
cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
});
});