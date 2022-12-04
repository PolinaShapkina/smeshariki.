var mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1/smeshariki')
var User = require("./models/user.js").User

var first_user = new User({
    username: "Daniil",
    password: "12345"
})

first_user.save(function (err, user) {
    if (err) throw err
    console.log(user)
})