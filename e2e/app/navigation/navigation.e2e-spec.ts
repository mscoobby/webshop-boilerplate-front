import { ECartPage } from './navigation.po'

describe('Navigation component', () => {
  let page: ECartPage, navbar

  beforeEach(() => {
    page = new ECartPage()
    navbar = page.getNavbar()
  })

  it('should display the navigation bar', () => {
    page.navigateTo()
    expect(navbar.brand).toBeDefined()
    expect(navbar.toggleBtn).toBeTruthy()
    expect(navbar.homeBtn).toBeTruthy()
    expect(navbar.shopBtn).toBeTruthy()
    expect(navbar.loginBtn).toBeTruthy()
    expect(navbar.registerBtn).toBeTruthy()
  })
  it('should navigate to /home when Brand clicked', () => {
    page.navigateTo('/shop')
    navbar.brand().click()
    expect(page.getCurrentUrl()).toEqual('/home')
  })
  it('should navigate to /home when Home clicked', () => {
    page.navigateTo('/shop')
    navbar.homeBtn().click()
    expect(page.getCurrentUrl()).toEqual('/home')
  })
  it('should navigate to /shop when Shop clicked', () => {
    page.navigateTo()
    let navbar = page.getNavbar()
    navbar.shopBtn().click()
    expect(page.getCurrentUrl()).toEqual('/shop')
  })
  it('should navigate to /login when Login clicked', () => {
    page.navigateTo()
    let navbar = page.getNavbar()
    navbar.loginBtn().click()
    expect(page.getCurrentUrl()).toEqual('/login')
  })
  it('should navigate to /register when Register clicked', () => {
    page.navigateTo()
    let navbar = page.getNavbar()
    navbar.registerBtn().click()
    expect(page.getCurrentUrl()).toEqual('/register')
  })
})
