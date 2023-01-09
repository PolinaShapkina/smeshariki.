var mysql = require('mysql2');


var drop = 'TRUNCATE TABLE smesharikis;'
var seedQuery = 'INSERT INTO smesharikis (title, nick, avatar, about) VALUES ("Пин", "Pin", "/images/pin.jpg", "Пин — изобретатель-самоучка, гениальнейший пингвин всех времён. Виртуоз в своих железных изобретениях."), ("Крош", "Krosh", "/images/krosh.jpg", "Крош – жизнерадостный, подвижный, никогда не унывающий кролик.Обожает подвижные игры и занятия спортом, особенно любит футбол."), ("Нюша", "Nyusha", "/images/nyusha.jpg", "Симпатичная юная свинка.Как и полагается поросятам, розового цвета. Романтичная, впечатлительная, доверчивая и мечтательная Нюша верит в добрые сказки, а в злые старается не верить.");'



var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'polina1604',
database: 'smeshariki'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})
