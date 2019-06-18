before(function () {
  var chai = require('chai');
  global.expect = chai.expect;
  chai.Should();
});

describe('home page', function () {
  it('should be able to render the page for /', function () {
    browser.url('/'); // open url

    const headline = browser.getText('p.lang');

    expect(headline).to.be.a('string');
    expect(headline).equal('Please choose your language');
  });
});
