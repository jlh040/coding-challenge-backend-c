"use strict";

const express = require("express");
const suggestionsRoutes = require('./routes/suggestions');

const app = express();

app.use(express.json());

app.use("/suggestions", suggestionsRoutes);


/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next({suggestions: []});
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  const status = 404;
  return res.status(status).json({
    suggestions: [],
  });
});

module.exports = app;