import { Demoapp3Page } from './app.po';

describe('demoapp3 App', () => {
  let page: Demoapp3Page;

  beforeEach(() => {
    page = new Demoapp3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
