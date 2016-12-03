var should = require('chai').should(),
  poker = require('../index');

describe('#face', function() {
  it('equates deuce and two', function() {
    poker.faces.deuce.should.equal(poker.faces.two);
  });

});
