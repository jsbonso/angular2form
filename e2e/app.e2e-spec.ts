import { Angular2formPage } from './app.po';

describe('angular2form App', function() {
  let page: Angular2formPage;

  beforeEach(() => {
    page = new Angular2formPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
