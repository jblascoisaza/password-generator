const express = require("express");
const test = require("./functions/test");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  test.helloWorld(res);
});

app.listen(port, () =>
  console.log(`Password-generator listening on port ${port}!`)
);
