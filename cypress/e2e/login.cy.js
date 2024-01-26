describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
  })
})


describe('Login Tests', () => {
  it('Login Berhasil', () => {
    cy.visit('/login.html');
    cy.get('input[name=user-name]').type('standard_user');
    cy.get('input[name=password]').type('secret_sauce');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/inventory');
  });

  it('Login Gagal Invalid Password', () => {
    cy.visit('/login.html');
    cy.get('input[name=user-name]').type('standard_user');
    cy.get('input[name=password]').type('invalid_password');
    cy.get('button[type=submit]').click();
    cy.contains('Username and password do not match');
  });

  it('Login Gagal Invalid Username', () => {
    cy.visit('/login.html');
    cy.get('input[name=user-name]').type('invalid_user');
    cy.get('input[name=password]').type('secret_sauce');
    cy.get('button[type=submit]').click();
    cy.contains('Username and password do not match');
  });

  it('Login Gagal dengan input username kosong', () => {
    cy.visit('/login.html');
    cy.get('input[name=password]').type('secret_sauce');
    cy.get('button[type=submit]').click();
    cy.contains('Username is required');
  });

  it('Login Gagal dengan input password kosong', () => {
    cy.visit('/login.html');
    cy.get('input[name=user-name]').type('standard_user');
    cy.get('button[type=submit]').click();
    cy.contains('Password is required');
  });
});
