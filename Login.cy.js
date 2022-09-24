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
    it('Deve fazer login com sucesso', () => {
    cy.visit('login')
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('testeQA@testando.com')
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('QA1213')
    cy.get('[data-test="login-submit"]').click()
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Catyany')
    });

/*Cenário 2: Validar criação de perfil com sucesso
Arrange - Dado que fiz login com sucesso
Action - Quando redirecionar para tela de dashboard e clicar no botão "criar perfil"
Assert - Então deve ser possível preencher os campos de perfil
*/
    it('Deve criar perfil com sucesso', () => {
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('#mui-component-select-status').click()
    cy.get('[data-test="status-2"]').click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('ViaHub')
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.linkedin.com/in/catyany-batista-67329820b/')
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('São Bernardo do Campo, SP')
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Testes e2e, integração, exploração, acompanhamento de bugs, cypress, funcionalidade e criação de casos de teste em gherkin')
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('https://github.com/CatyanyB')
    cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type('Alguma coisa legal sobre mim')
    cy.get('[data-test="profile-socials"]').click()
    cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.linkedin.com/in/catyany-batista-67329820b/')
    cy.get('[data-test="profile-submit"]').click()
    });

});