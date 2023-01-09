var express = require ('express');
var router = express.Router();
//var checkAuth = require("./../middleware/checkAuth.js")
//var Smeshariki = require ("../models/Smeshariki").smeshariki;
var db = require('../mySQLConnect.js');
//var async = require ("async");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('<h1>Это экран для списка смешариков</h1>');
});


/* Страница Смешариков*/
router.get("/:nick", function(req, res, next) {
    db.query(`SELECT * FROM smesharikis WHERE smesharikis.nick = '${req.params.nick}'`, (err, smesharikis) => {
    if(err) {
    console.log(err);
    if(err) return next(err)
    } else {
    if(smesharikis.length == 0) return next(new Error("Нет такого смешарика в мультике"))
    var smeshariki = smesharikis[0];
    res.render('smeshariki', {
    title: smeshariki.title,
    picture: smeshariki.avatar,
    desc: smeshariki.about
    })
}
})

/*
router.get('/:nick',checkAuth,function(req, res, next) {
    Smeshariki.findOne({ nick: req.params.nick }, function (err, smeshariki) {
        if (err) return next(err)
        if (!smeshariki) return next(new Error("Нет такого героя в мультике"))
        res.render('smeshariki', {
            title: smeshariki.title,
            picture: smeshariki.avatar,
            desc: smeshariki.desc
        })
    })*/
})
module.exports = router;