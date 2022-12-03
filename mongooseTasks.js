var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test1')
var smeshariki = require("../models/Smeshariki").smeshariki


var Smeshariki = new smeshariki({
    title: "Нюша",
    nick:"Nusha"
})


console.log(Smeshariki)
Smeshariki.save(function(err, Smeshariki, affected){console.log(Smeshariki.title)})