"use strict";

const app = require("./app");
const PORT = 2345;

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});