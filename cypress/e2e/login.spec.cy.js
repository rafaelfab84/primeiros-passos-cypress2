describe('template spec', () => {
  
  const selectorslist = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: '.oxd-alert'
  }

  
  it('login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('Admin')
    cy.get(selectorslist.passwordField).type('admin123')
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.sectionTitleTopBar).contains('Dashboard')
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  })

    it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('teste')
    cy.get(selectorslist.passwordField).type('teste')
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
  
  })

})