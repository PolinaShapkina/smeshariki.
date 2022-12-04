
var express = require('express')
var router = express.Router()
var Smeshariki = require("../models/Smeshariki").smeshariki
var User = require("./../models/user").User


/* GET home page. */
router.get('/', function(req, res, next) {
    Smeshariki.find({},{_id:0,title:1,nick:1},function(err,menu){
      req.session.greeting = 'Hi!!!'
      res.cookie('greeting', 'Hi!!!')
      res.render('index',{
                                title: 'Express',
                                counter:req.session.counter 
                            });
    })

});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход', error:null});
});

/* POST login/registration page. */
router.post('/logreg', function (req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({ username: username }, function (err, user) {
      if (err) return next(err)
      if (user) {
          if (user.checkPassword(password)) {
              req.session.user = user._id
              res.redirect('/')
          } else {
              res.render('logreg', { error: "Пароль не верный" });
          }
      } else {
          var user = new User({ username: username, password: password })
          user.save(function (err, user) {
              if (err) return next(err)
              req.session.user = user._id
              res.redirect('/')
          })
      }
  })
});
/*
страница нюши
router.get('/Nusha', function(req, res, next) {
  res.render('smeshariki', {
      title: "Нюша",
      picture: "images/nyusha.jpg",
      desc: "Симпатичная юная свинка.Как и полагается поросятам, розового цвета. Романтичная, впечатлительная, доверчивая и мечтательная Нюша верит в добрые сказки, а в злые старается не верить."
  });
});


страница кроша
router.get('/Krosh', function(req, res, next) {
  res.render('smeshariki', {
      title: "Крош",
      picture: "images/krosh.jpg",
      desc: "Крош – жизнерадостный, подвижный, никогда не унывающий кролик.Обожает подвижные игры и занятия спортом, особенно любит футбол."
    });
  });


страница пина
router.get('/Pin', function(req, res, next) {
  res.render('smeshariki', {
      title: "Пин",
      picture: "images/pin.jpg",
      desc: "Пин — изобретатель-самоучка, гениальнейший пингвин всех времён. Виртуоз в своих железных изобретениях."
  });
});
*/

module.exports = router;
