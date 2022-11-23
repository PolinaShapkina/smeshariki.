var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test')

var schema = mongoose.Schema({ name: String })

schema.methods.cric = function () {
    console.log(this.get("name") + " сказала хрю,хрю")
}

var Avocado = mongoose.model('fauna', schema)

var kitty = new Avocado({ name: 'Нюша' })
kitty.save(function (err) {
    kitty.cric()
})