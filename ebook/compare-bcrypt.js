const bcrypt = require('bcrypt');
const User = require('./User');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database');


mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection opzn to db');
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection error: ${err}`);
});

let login = 'shop_user0';
let plainPassword = 'password0';

// callback
User.findOne({login: login}, (err, user) => {
    bcrypt.compare(plainPassword, user.password, (err, res) => {
        console.log('callback: ', res);
    });
});

// promise
User.findOne({login: login})
.then(user => {
    return bcrypt.compare(plainPassword, user.password)
})
.then(res => {
    console.log('promise: ', res);
})

// async await
User.findOne({login: login}, async function(err, user) {
    console.log('async await: ', await bcrypt.compare(plainPassword, user.password));
});
