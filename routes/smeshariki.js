var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Новый маршрутизатор, для маpшрутов, начинающихся с smeshariki');
});

/* Страница смешариков */
router.get("/:nick", function (req, res, next) {
    res.send(req.params.nick);
});
/* Страница героев */
router.get('/:nick', function(req, res, next) {
    smeshariki.findOne({nick:req.params.nick}, function(err,smeshariki){
        if(err) return next(err)
        if(!smeshariki) return next(new Error("Нет такого героя в этом мультике"))
        res.render('smeshariki', {
            title: smeshariki.title,
            picture: smeshariki.avatar,
            desc: smeshariki.desc
        })
    })
})



module.exports = router;