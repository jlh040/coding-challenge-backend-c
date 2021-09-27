"use strict";

const express = require('express');
const Suggestion = require('../models/suggestions');
const getScore = require('../helpers/getScore');

const router = new express.Router();

router.get('/', async function(req, res, next) {
  let name = req.query.q;
  let latitude = req.query.latitude;
  let longitude = req.query.longitude;
  let suggestions = await Suggestion.findAll({ name, latitude, longitude });

  suggestions = suggestions.map(suggestion => ({score: getScore(), ...suggestion}));
  
  return res.json({ suggestions });
})


module.exports = router;