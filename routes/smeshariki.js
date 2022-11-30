var express = require('express');
var router = express.Router();
const smeshariki = require("../models/fauna").smeshariki



/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Новый маршрутизатор, для маpшрутов, начинающихся с smeshariki');
});

/* Страница героев */
router.get('/:nick', function(req, res, next) {
    
    smeshariki.findOne({nick:req.params.nick}, function(err,fauna){
        if(err) return next(err)
        if(!fauna) return next(new Error("Нет такого героя в этом мультике"))
        res.render('fauna', {
            title: fauna.title,
            picture: fauna.avatar,
            desc: fauna.desc
        })
    })
})



module.exports = router;