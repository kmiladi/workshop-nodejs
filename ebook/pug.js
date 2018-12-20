const express = require('express');
const path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render("homepage", {name: 'Miladi'});
});

app.listen(8080);
console.log('listening on port 8080');
