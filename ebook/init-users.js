const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/database');

var db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection  open to db');
});

var user = require(__dirname + '/User.js');

[...Array(10).keys()].forEach(async function(value, index){
    console.log('insert user: ' + index);

    try {
        let password = await bcrypt.hash('password' + index, 10);
        user.create({
            login: 'shop_user' + index,
            password: password,
    });
    } catch(e) {
        console.error(e);
    }
});
