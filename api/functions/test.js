module.exports = {
  helloWorld: function(res) {
    res.send("Hello World.");
  },
  rNumber: function(max, min) {
    const number = Math.round(Math.random() * (max - min) + min);

    return number;
  },
  rNumbers: function(nLength) {
    const numbers = [];

    for (let index = 1; index <= nLength; index++) {
      const number = this.rNumber(9, 1);

      numbers.push(number);
    }

    return numbers;
  },
  rLetter: function() {
    const lower = "abcdefghijklmnñopqrstuvwxyz";
    const capital = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    const type = this.rNumber(2, 1);
    const number = this.rNumber(26, 0);
    var letter;

    if (type === 1) letter = lower.charAt(number);
    else letter = capital.charAt(number);

    return letter;
  },
  rSpecial: function() {
    const characters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

    const number = this.rNumber(28, 0);
    const character = characters.charAt(number);

    return character;
  }
};
