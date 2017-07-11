import { ECartPage } from './app.po'

describe('eCart App', () => {
  let page: ECartPage

  beforeEach(() => {
    page = new ECartPage()
  })
  it('should redirect to /home', () => {
    page.navigateTo()
    expect(page.getCurrentUrl()).toEqual('/home')
  })
  it('should display welcome message', () => {
    page.navigateTo()
    expect(page.getTitleText()).toEqual('Welcome to eCart')
  })
  it('should display landing paragraph', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('This is the landing page of our web shop.')
  })
  it('should display footer', () => {
    page.navigateTo()
    expect(page.getFooter()).toBeTruthy()
  })
})
