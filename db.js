"use strict";
/** Database setup. */
const { Client } = require("pg");

let db;

db = new Client({
  connectionString: "cities"
});

db.connect();

module.exports = db;