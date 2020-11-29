import { NoisyAngularPage } from './app.po';

describe('noisy-angular App', () => {
  let page: NoisyAngularPage;

  beforeEach(() => {
    page = new NoisyAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
