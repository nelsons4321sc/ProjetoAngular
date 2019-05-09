import { Meuprojeto4Page } from './app.po';

describe('meuprojeto4 App', () => {
  let page: Meuprojeto4Page;

  beforeEach(() => {
    page = new Meuprojeto4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
