import { BdxjugPage } from './app.po';

describe('bdxjug App', function() {
  let page: BdxjugPage;

  beforeEach(() => {
    page = new BdxjugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
