before(function () {
  var chai = require('chai');
  global.expect = chai.expect;
  chai.Should();
});

describe('home page', function () {
  it('should be able to render the page for /en', function () {
    browser.url('/en'); // open url

    const headline = browser.getText('h1');

    expect(headline).to.be.a('string');
    expect(headline).equal('Welcome to the stencil SEO starter');
  });
});
