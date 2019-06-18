before(function () {
  var chai = require('chai');
  global.expect = chai.expect;
  chai.Should();
});

describe('home page', function () {
  it('should be able to render the page for /', function () {
    browser.url('/'); // open url

    const headline = browser.getText('h1');

    expect(headline).toBeDefined();
  });
});
