const express = require('express');

const Product = require('./Product');
const User = require('./User');
const Order = require('./Order');
const ProductsManager = require('./ProductsManager');
const OrderManager = require('./OrderManager');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database');


mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection opzn to db');
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection error: ${err}`);
});

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    ProductsManager.listProducts((err, products) => {
        if (err) {
            res.json('error');
        };

        res.render('pages/index', {'products': products});
    });

    /*let newProduct = {
        "name": "product 1",
        "description": "description product 1",
        "USD_price": "20",
        "EUR_price": "17.1",
        "file_link": "file product 1",
        "creation_date": "2018-12-10",
        "orders_counter": 19
    }

    Product.create(newProduct, function (err, newProduct) {
        //if (err) return handleError(err);
        console.log('Product saved', newProduct);
    });*/

    /*Product.findOne({name: 'product 1'}, (err, findedProduct) => {
        console.log(findedProduct);
    });*/


});

app.get('/order/:id', function(req, res) {
    let id = req.params.id;
    ProductsManager.orderProductById(id, (err, product) => {
        if (err) {
            res.json('error product');
        } else {            
            OrderManager.addOrder(product.id, 'karim', (err, order) => {
                if (err) {
                    res.json('error order');
                } else {
                    res.json(order);
                }
            });            
        }
    });
    
});

app.get('/add-user', function(req, res) {
    let newUser = {login: req.query.login, password: req.query.password}
    User.create(newUser, function (err, newUser) {
        //if (err) return handleError(err);
        res.json(newUser);
    });
});

app.get('/users', function(req, res) {
    User.find((err, users) => {
        res.send(users);
    })
});

app.get('/orders', function(req, res) {
    Order.find((err, orders) => {
        res.send(orders);
    })
});

app.get('/user-orders/:userId', function(req, res) {
    let userId = req.params.userId
    /*OrderManager.getUserOrders(userId, (err, orders) => {
        if (err) {
            console.log(err)
            res.json('error user orders');
        } else {
            res.json(orders);
        }
    }); */
    /*OrderManager.getUserOrders(userId)
    .then ((orders) => {
        res.json(orders);
    })*/
    res.json(OrderManager.getUserOrders(userId));
});


app.listen(8080);
console.log('listening on port 8080');
