var should = require('chai').should,
  poker = require('../index');

describe('#face', function() {
  it('equates deuce and two', function() {
    poker.faces.deuce.should.equal(poker.faces.two);
  });

  it('equates trey and three', function() {
    poker.faces.trey.should.equal(poker.faces.three);
  });

});

describe('#getCard', function() {
  it('gets an unknown card when no args are passed', function() {
    var card = poker.getCard();
    card.face.should.equal(poker.faces.any);
    card.suit.should.equal(poker.suits.any);
  });
});
