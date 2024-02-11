// cypress/integration/login.spec.js
import LoginPage from '../support/pageObjects/LoginPage';

describe('Login Test', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('Should login successfully with valid credentials', () => {
    cy.fixture('userDetails').then((user) => {
      loginPage.fillEmail(user.email);
      loginPage.fillPassword(user.password);
      loginPage.submit();
      cy.url().should('include', '/customer/account/');
    });
  });

  // Tambahkan lebih banyak tes dengan skenario positif dan negatif
});