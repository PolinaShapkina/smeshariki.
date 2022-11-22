var express = require('express');
var router = express.Router();

/* Страница Нюши*/
router.get('/Nusha', function(req, res, next) {
  res.send("<h1>Страница Нюши</h1>")
});

/* Страница Кроша*/
router.get('/Krosh', function(req, res, next) {
  res.send("<h1>Страница Кроша</h1>")
});

/* Страница Пина */
router.get('/Pin', function(req, res, next) {
  res.send("<h1>Страница Пина</h1>")
});


module.exports = router;
