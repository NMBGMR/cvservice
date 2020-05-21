var express = require('express');
var router = express.Router();
var CV = require('../cvdefinitions')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(Object.values(CV.observationTypes))
});

module.exports = router;
