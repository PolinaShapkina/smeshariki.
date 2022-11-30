var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test1')
var smeshariki = require("../models/fauna").smeshariki


var fauna = new smeshariki({
    title: "Нюша",
    nick:"Nusha"
})


console.log(fauna)
fauna.save(function(err, fauna, affected){console.log(fauna.title)})