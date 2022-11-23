var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test')

var fauna = mongoose.model('fauna', { name: String })

var kitty = new fauna({ name: 'Нюша' })
kitty.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Хрю,хрю')
    }
})
