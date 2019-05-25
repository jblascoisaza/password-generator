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
  rNumbers2: function(nLength, n1, n2) {
    const numbers = [];

    for (let index = 1; index <= nLength; index++) {
      const rnumber = this.rNumber(2, 1);
      let number;

      if (rnumber === 1) number = n1;
      else number = n2;

      numbers.push(number);
    }

    return numbers;
  },
  rLetter: function() {
    const lower = "abcdefghijklmnñopqrstuvwxyz";
    const capital = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    const type = this.rNumber(2, 1);
    const number = this.rNumber(26, 0);
    let letter;

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
  rPassword: function(pLength, n, l, s) {
    // 0 = True, 1 = false
    // 1 = Numbers, 2 = Letters, 3 = Special
    let types;

    if (n === 0 && l === 0 && s === 0) {
      types = this.rNumbers(pLength, 3, 1);
    } else if (n === 1 && l === 0 && s === 0) {
      types = this.rNumbers(pLength, 3, 2);
    } else if (n === 0 && l === 0 && s === 1) {
      types = this.rNumbers(pLength, 2, 1);
    } else {
      types = this.rNumbers2(pLength, 1, 3);
    }

    let password = "";

    for (let index = 0; index < pLength; index++) {
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
