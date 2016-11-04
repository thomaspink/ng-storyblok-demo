import { NgStoryblokDemoPage } from './app.po';

describe('ng-storyblok-demo App', function() {
  let page: NgStoryblokDemoPage;

  beforeEach(() => {
    page = new NgStoryblokDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
