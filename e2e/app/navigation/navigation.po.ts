import { browser, by, element } from 'protractor'

export class ECartPage {
  navigateTo(url = '/') {
    return browser.get(url)
  }

  getCurrentUrl() {
    return browser.getCurrentUrl().then(url => url.replace(browser.baseUrl, ''))
  }

  getNavbar() {
    return {
      toggleBtn: () => element(by.css('button.navbar-toggle')),
      brand: () => element(by.css('a.navbar-brand')),
      homeBtn: () => element(by.css('ul.nav li a[routerLink="/home"]')),
      shopBtn: () => element(by.css('ul.nav li a[routerLink="/shop"]')),
      loginBtn: () => element(by.css('ul.nav li a[routerLink="/login"]')),
      registerBtn: () => element(by.css('ul.nav li a[routerLink="/register"]'))
    }
  }

}
