import { browser, by, element } from 'protractor'

export class ECartPage {
  navigateTo(url = '/') {
    return browser.get(url)
  }

  getCurrentUrl() {
    return browser.getCurrentUrl().then(url => url.replace(browser.baseUrl, ''))
  }

  getTitleText() {
    return element(by.id('welcome-title')).getText()
  }

  getParagraphText() {
    return element(by.css('app-root p')).getText()
  }

  getFooter() {
    return element(by.css('app-footer footer'))
  }
}
