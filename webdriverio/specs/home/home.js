before(function () {
  var chai = require('chai');
  global.expect = chai.expect;
  chai.Should();
});

describe('home pages', function () {
  it('should be able to render the page for /', function () {
    browser.url('/'); // open url

    const headline = browser.getText('p.lang');

    expect(headline).to.be.a('string');
    expect(headline).equal('Please choose your language');
  });

  it('should be able to render the page for /en', function () {
    browser.url('/en'); // open url

    const headline = browser.getText('h1');

    expect(headline).to.be.a('string');
    expect(headline).equal('Welcome to the stencil SEO starter');
  });

  it('should be able to render the page for /de', function () {
    browser.url('/de'); // open url

    const headline = browser.getText('h1');

    expect(headline).to.be.a('string');
    expect(headline).equal('Willkommen im Stencil SEO Startpaket');
  });
});
