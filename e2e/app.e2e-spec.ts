import { CryptoKajmakPage } from './app.po';

describe('crypto-kajmak App', function() {
  let page: CryptoKajmakPage;

  beforeEach(() => {
    page = new CryptoKajmakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
