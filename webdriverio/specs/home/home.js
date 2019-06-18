before(function () {
  var chai = require('chai');
  global.expect = chai.expect;
  chai.Should();
});

describe('home page', function () {
  it('should be able to render the page for /', function () {
    browser.url('/'); // open url

    const headline = browser.getText('p');

    expect(headline[0]).to.be.a('string');
    expect(headline[0]).equal('Please choose your language');
  });
});
