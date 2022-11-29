var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Новый маршрутизатор, для маpшрутов, начинающихся с avocados');
});

/* Страница смешариков */
router.get("/:nick", function (req, res, next) {
    res.send(req.params.nick);
});


module.exports = router;