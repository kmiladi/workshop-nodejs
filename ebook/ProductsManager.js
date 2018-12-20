const Product = require('./Product')

const ProductsManager = {
    /*listProducts: function(callback) {
        Product.find((err, products) => {
            if (err) {
                return callback(err);
            }
            try {
                callback(null, products) ;
            } catch(e) {
                callback(e);
            }
        });
    },*/
    listProducts: function(callback) {
        Product.find(callback); 
    },

    orderProductById: function(id, callback) {
        Product.findByIdAndUpdate(id, { $inc: { orders_counter: 1 } }, (err, product) => {
            if (err) {
                return callback(err);
            }
            try {
                callback(null, product) ;
            } catch(e) {
                callback(e);
            }
        });    
    },
    getUserProducts: async function(userId) {
    
        let orders = await Order.find({user: userId});
        return orders;
    }
}

module.exports = ProductsManager;
