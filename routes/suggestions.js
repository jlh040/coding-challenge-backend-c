"use strict";

const express = require('express');
const Suggestion = require('../models/suggestions');

const router = new express.Router();

router.get('/', async function(req, res, next) {
  const query = req.query.q;
  const suggestions = await Suggestion.findAll({name: query});
  return res.json({ suggestions });
})


module.exports = router;