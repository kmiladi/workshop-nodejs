const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database');


mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection opzn to db');
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection error: ${err}`);
});


