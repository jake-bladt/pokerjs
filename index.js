module.exports = {

  getCard: function() {
    var argCount = arguments.length;
    if(0 == argCount) {
      return this.getCard(this.faces.any, this.suits.any);
    }
  },

  faces: {
    not: 0,
    ace: 1,
    deuce: 2, two: 2,
    trey: 3, three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    jack: 11,
    queen: 12,
    king: 13,
    any: 14,
    some: 15
  },

  shortfaces: '!A23456789TJQK&%',

  suits: {
    not: 0,
    clubs: 1,
    diamonds: 2,
    hearts: 3,
    spades: 4,
    any: 5,
    some: 6,
    morethan: 7
  },

  shortsuits: '!cdhs&%>'
  
};
