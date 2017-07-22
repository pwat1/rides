import { RidesPage } from './app.po';

describe('rides App', () => {
  let page: RidesPage;

  beforeEach(() => {
    page = new RidesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
