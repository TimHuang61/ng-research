import { NgResearchPage } from './app.po';

describe('ng-research App', () => {
  let page: NgResearchPage;

  beforeEach(() => {
    page = new NgResearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
