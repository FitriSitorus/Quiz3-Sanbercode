cy.fixture('user').then((user) => {
    cy.login(user.email, user.password);
  });
  