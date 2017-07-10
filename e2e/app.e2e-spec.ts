import { ECartPage } from './app.po';

describe('e-cart App', () => {
  let page: ECartPage;

  beforeEach(() => {
    page = new ECartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
