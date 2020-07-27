var express = require('express');
var router = express.Router();

const indexController = require('../controllers/index');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/contacto', function (req, res, next) {
  res.render('contact');
});

router.post('/contacto', function (req, res, next) {
  res.render('contact');
});

router.get('/certificados', (req, res) => {
  res.render('certificados');
});

router.get('/detalle-proyecto/:project_id', (req, res) => {
  indexController.getDetalleProyecto(req, res);
});

router.get('/noticias', (req, res) => {
  res.render('noticias');
});

router.get('/detalle-noticia/:xid', (req, res) => {
  indexController.getDetalleNoticia(req, res);
});

module.exports = router;
