var express = require ('express');
var router = express.Router();
var smeshariki = require ("../models/Smeshariki").smeshariki;
var async = require ("async");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с smeshariki')
});

/* Страница смешариков */
router.get('/:nick', function(req, res, next) {
    async.parallel([
            function(callback){
                smeshariki.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                smeshariki.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var Smeshariki = result[0]
            var smesharikis= result[1] || []
            console.log(smesharikis)
            if(!Smeshariki) return next(new Error("Нет такого героя в мультике "))
            res.render('Smeshariki', {
                title: Smeshariki.title,
                picture: Smeshariki.avatar,
                desc: Smeshariki.desc,
                menu: smesharikis
            });
        })
})
module.exports = router