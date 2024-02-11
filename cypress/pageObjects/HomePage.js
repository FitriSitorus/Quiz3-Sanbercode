class HomePage {
    visit() {
      cy.visit('/');
    }
  
    goToLoginPage() {
      cy.get('a[href*="customer/account/login"]').click();
    }
  }
  
  export default HomePage;
  