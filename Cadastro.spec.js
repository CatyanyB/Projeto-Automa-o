/// <reference types="cypress" />

const faker = require("faker-br");

describe('Funcionalidade: Cadastro', () => {
/*  (Hook)
Antes de tudo
Before

Antes de cada cenário
BeforeEach

Depois de tudo
After

Depois de cada cenário
AfterEach */
before(() => {
    cy.visit('cadastrar')
});
    it('Deve fazer cadastro com sucesso', () => {
        cy.cadastro('Catyany', faker.internet.email(), 'QA1213', 'QA1213')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

    it('Deve acessar tela de criar perfil', () => {
       cy.Perfil('ViaHub', 'https://github.com/CatyanyBatista', 'São Bernado do Campo - SP', 'Explorátorios, integração, manuais, Jira, BDD','CatyanyBatista', 'Alguma coisa sobre mim', 'CatyanyBatista', 'https://www.linkedin.com/in/catyany-batista-67329820b/')
    });
});


