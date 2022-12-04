var express = require ('express');
var router = express.Router();
var checkAuth = require("./../middleware/checkAuth.js")
var Smeshariki = require ("../models/Smeshariki").smeshariki;
var async = require ("async");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с smeshariki')
});


/* Страница Смешариков*/
router.get('/:nick',checkAuth,function(req, res, next) {
    Smeshariki.findOne({ nick: req.params.nick }, function (err, smeshariki) {
        if (err) return next(err)
        if (!smeshariki) return next(new Error("Нет такого героя в мультике"))
        res.render('smeshariki', {
            title: smeshariki.title,
            picture: smeshariki.avatar,
            desc: smeshariki.desc
        })
    })
})
module.exports = router