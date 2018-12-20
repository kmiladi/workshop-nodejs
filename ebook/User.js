const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    login: 'String', 
    password: 'String',
});

var User = mongoose.model('User', schema);

module.exports = User;
