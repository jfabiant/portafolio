var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/contacto', function(req, res, next) {
  res.render('contact');
});

router.get('/procesar_contacto', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
