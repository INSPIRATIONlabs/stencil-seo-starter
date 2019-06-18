import { SiteLoader } from './site-loader';

describe('site-loader', () => {
  it('should build', () => {
    expect(new SiteLoader()).toBeTruthy();
  });

});
