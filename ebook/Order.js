const mongoose = require('mongoose');
let Schema = mongoose.Schema;

var schema = new mongoose.Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    order_date: {type: Date, default: Date.now()},
    price: 'Number'
});

var Order = mongoose.model('Order', schema);

module.exports = Order;
