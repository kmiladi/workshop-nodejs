const Product = require('./Product')
const User = require('./User')
const Order = require('./Order')

OrderManager = {
    addOrder: function(productId, login, callback) {
        Product.findOne({_id: productId}, (err, product) => {
            if (err || !product) {
                return callback(err);
            }
            User.findOne({login: login}, (err, user) => {
                if (err || !user) {
                    return callback(err);
                }

                let newOrder = {
                    product: productId,
                    user: user.id,
                    price: product.EUR_price
                }

                Order.create(newOrder, function (err, newOrder) {
                    if (err) {
                        return callback(err);
                    }
                    callback(null, newOrder);
                });

            });
        });
    },
    /*getUserOrders: function(userId, callback) {
        Order.find({user: userId})
        .then ((orders) => {
            callback(null, orders)
        })
        
        .catch((error) => {
            callback(error)
        });
    },*/
    getUserOrders: async function(userId) {
    
        let orders = await Order.find({user: userId});
        return orders;
    }
}

module.exports = OrderManager;
