const express = require("express");
const test = require("./functions/test");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  test.helloWorld(res);
});

app.get("/api/v1/rNumber", (req, res) => {
  const number = test.rNumber(9, 1);

  return res.send(number.toString());
});

app.post("/api/v1/rNumbers", (req, res) => {
  const numbers = test.rNumbers(req.body.nLength);

  return res.send(numbers);
});

app.get("/api/v1/rLetter", (req, res) => {
  const letter = test.rLetter();

  return res.send(letter);
});

app.get("/api/v1/rSpecial", (req, res) => {
  const character = test.rSpecial();

  return res.send(character);
});

app.post("/api/v1/rPassword", (req, res) => {
  const password = test.rPassword(
    req.body.pLength,
    req.body.n,
    req.body.l,
    req.body.s
  );

  return res.send(password);
});

app.listen(port, () =>
  console.log(`Password-generator listening on port ${port}!`)
);
