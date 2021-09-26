"use strict";

const express = require('express');

const NotFoundError = require('../expressError');

const router = new express.Router();

router.get('/', async function(req, res, next) {
  return res.json({'HELLO': 'THERE'});
})


module.exports = router;