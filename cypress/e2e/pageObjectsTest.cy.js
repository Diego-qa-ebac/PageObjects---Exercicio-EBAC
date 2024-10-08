/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const { homePage } = require("../support/pages/home.page");
const registerPage = require("../support/pages/cadastro.page");


describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'} )
    cy.visit('/')
  });

  it('Deve fazer login com sucesso', () => {
    homePage.openMenu('Account')  
    cy.get('[data-testid="signUp"] > .css-146c3p1').click()
   
    //faker
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const phone = faker.phone.number();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const repassword = password;

    registerPage.register(firstName, lastName, phone, email, password, repassword);
    
    cy.get('[data-testid="create"] > .css-146c3p1').click()
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > [style="color: rgb(255, 255, 255); font-size: 20px; font-family: Montserrat-Bold;"]').should('have.text', 'EBAC Store')
  })
})
