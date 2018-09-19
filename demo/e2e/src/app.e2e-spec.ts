import { MatProgressButtonsDemoPage } from './app.po';

describe('mat-progress-buttons-demo App', () => {
  let page: MatProgressButtonsDemoPage;

  beforeEach(() => {
    page = new MatProgressButtonsDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
