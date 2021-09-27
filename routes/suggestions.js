"use strict";

const express = require('express');
const Suggestion = require('../models/suggestions');
const getScore = require('../helpers/getScore');

const router = new express.Router();

router.get('/', async function(req, res, next) {
  let query = req.query.q;
  let suggestions = await Suggestion.findAll({name: query});
  suggestions = suggestions.map(suggestion => ({score: getScore(), ...suggestion}));
  return res.json({ suggestions });
})


module.exports = router;