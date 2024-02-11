import HomePage from '../pageObjects/HomePage'

describe('Login Test', () => {
  const homePage = new HomePage()

  it('User navigates to login page', () => {
    homePage.visit()
    homePage.goToLoginPage()
  })
})
