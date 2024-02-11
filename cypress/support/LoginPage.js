class LoginPage {
    visit() {
      cy.visit('/customer/account/login/');
    }
  
    fillEmail(email) {
      cy.get('input[name="login[username]"]').type(email);
    }
  
    fillPassword(password) {
      cy.get('input[name="login[password]"]').type(password);
    }
  
    submit() {
      cy.get('button[title="Login"]').click();
    }
  }
  
  export default LoginPage;
  