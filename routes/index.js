var express = require('express');
var router = express.Router();

/* Страница Нюши */
router.get('/Nusha', function(req, res, next) {
  res.render('smeshariki', {
      title: "Нюша",
      picture: "images/nyusha.jpg",
      desc: "Симпатичная юная свинка.Как и полагается поросятам, розового цвета. Романтичная, впечатлительная, доверчивая и мечтательная Нюша верит в добрые сказки, а в злые старается не верить."
  });
});


/* Страница Кроша*/
router.get('/Krosh', function(req, res, next) {
  res.render('smeshariki', {
      title: "Крош",
      picture: "images/krosh.jpg",
      desc: "Крош – жизнерадостный, подвижный, никогда не унывающий кролик.Обожает подвижные игры и занятия спортом, особенно любит футбол."
    });
  });


/* Страница Пина*/
router.get('/Pin', function(req, res, next) {
  res.render('smeshariki', {
      title: "Пин",
      picture: "images/pin.jpg",
      desc: "Пин — изобретатель-самоучка, гениальнейший пингвин всех времён. Виртуоз в своих железных изобретениях."
  });
});


module.exports = router;
