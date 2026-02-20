import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: "[role='alert']",
    dashBoardGrid: ".orangehrm-dashboard-grid"

  }

  const userData = {
    userSuccess: {
      username: 'Admin',
      password: 'admin123',
    },
    userFail: {
      username: 'test',
      password: 'test123'
    }
  }

  it('login-success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashBoardGrid)
  })
    it('login-Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type('test')
    cy.get(selectorList.passwordField).type('test123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
    })
  })