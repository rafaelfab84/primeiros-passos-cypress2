import userData from '../fixtures/Users/userData.json'

describe('template spec', () => {
  
  const selectorslist = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    DashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: '.oxd-alert'
  }

 
  
  it('login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.DashboardGrid)
  })


    it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist.passwordField).type(userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)  
  })

})