var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test1')
var fauna = require("./models/smeshariki.js").fauna


var fauna = new fauna({
title: "Нюша",
nick:"Nusha"
})


console.log(fauna)
fauna.save(function(err, fauna, affected){
    console.log(fauna.title)

})
