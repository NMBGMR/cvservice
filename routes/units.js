var express = require('express');
var router = express.Router();
var CV = require('../cvdefinitions')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(CV.units)
});

router.get('/:unitID', (req, res)=>{
  res.send(CV.units[req.params.unitID])
})
module.exports = router;
