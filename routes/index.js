var express = require('express');
var router = express.Router();

/* Страница Нюши */
router.get('/Nusha', function(req, res, next) {
  res.render('smeshariki', {
      title: "Нюша",
      picture: "images/nyusha.jpg",
      desc: "Модная свинка"
  });
});


/* Страница Кроша*/
router.get('/Krosh', function(req, res, next) {
  res.render('smeshariki', {
      title: "Крош",
      picture: "images/krosh.jpg",
      desc: "Носит красный бант и красное платье."
    });
  });


/* Страница Пина*/
router.get('/Pin', function(req, res, next) {
  res.render('smeshariki', {
      title: "Пин",
      picture: "images/pin.jpg",
      desc: "Cамый младший член семьи."
  });
});


module.exports = router;
