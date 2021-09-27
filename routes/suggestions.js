"use strict";

const express = require('express');
const NotFoundError = require('../expressError');
const router = new express.Router();
const Suggestion = require('../models/suggestions');

router.get('/', async function(req, res, next) {
  console.log(await Suggestion.findAll({name: 'san'}))
  return res.json({'HELLO': 'THERE'});
})


module.exports = router;