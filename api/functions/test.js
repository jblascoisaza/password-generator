module.exports = {
  helloWorld: function(res) {
    res.send("Hello World.");
  },
  rNumber: function(max, min) {
    const number = Math.round(Math.random() * (max - min) + min);

    return number;
  },
  rNumbers: function(nLength, rNumberMax, rNumberMin) {
    const numbers = [];

    for (let index = 1; index <= nLength; index++) {
      const number = this.rNumber(rNumberMax, rNumberMin);

      numbers.push(number);
    }

    return numbers;
  },
  rLetter: function() {
    const lower = "abcdefghijklmnñopqrstuvwxyz";
    const capital = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    const type = this.rNumber(2, 1);
    const number = this.rNumber(26, 0);
    let letter = "";

    if (type === 1) letter = lower.charAt(number);
    else letter = capital.charAt(number);

    return letter;
  },
  rSpecial: function() {
    const characters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

    const number = this.rNumber(28, 0);
    const character = characters.charAt(number);

    return character;
  },
  rPassword: function(pLength) {
    const types = this.rNumbers(pLength, 3, 1);
    let password = "";

    for (let index = 1; index <= types.length; index++) {
      if (types[index] === 1) {
        const number = this.rNumber(9, 1);

        password += number;
      } else if (types[index] === 2) {
        const letter = this.rLetter();

        password += letter;
      } else {
        const character = this.rSpecial();

        password += character;
      }
    }

    return password;
  }
};
