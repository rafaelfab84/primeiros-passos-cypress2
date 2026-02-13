import userData from '../fixtures/Users/userData.json'

describe('template spec', () => {
  
  const selectorslist = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    DashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: '.oxd-alert',
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    SaveButton: "[type='submit']",
    closeDateButton: ".--close"
  }

 
  
  it.only('User Info Update', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.DashboardGrid)
    cy.get(selectorslist.myInfoButton).click()
    cy.get(selectorslist.firstNameField).clear().type("Rafael")
    cy.get(selectorslist.middleNameField).clear().type("Fabiani de")
    cy.get(selectorslist.lastNameField).clear().type("Andrade")
    cy.get(selectorslist.genericField).eq(4).clear().type("teste") //Employee id
    cy.get(selectorslist.genericField).eq(5).clear().type("Outro ID 1234") //Other id
    cy.get(selectorslist.genericField).eq(6).clear().type("123456-123") //Driver's License Number
    
    cy.get(selectorslist.dateField).eq(0).clear().type("2026-12-12") //License Expiry Date
    cy.get(selectorslist.closeDateButton).click() // Clicar no botão fechar do calendário para sair do campo data

    cy.get(selectorslist.dateField).eq(1).clear().type("1984-12-12") //Date of Birth
    cy.get(selectorslist.closeDateButton).click() // Clicar no botão fechar do calendário para sair do campo data

    cy.get(selectorslist.SaveButton).eq(0).click() // Clica no botão salvar

    cy.get('body').should('contain', 'Successfully Updated') // Verifica se a mensagem de sucesso aparece na tela
    cy.get('.oxd-toast-close')
  })


    it('login - fail', () => {
    cy.visit('auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist.passwordField).type(userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
  })

})