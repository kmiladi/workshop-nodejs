const fs = require('fs');
var readline = require('readline');
const file = 'products.json';

function listProducts(callback) {
    fs.readFile(`${__dirname}/${file}`, 'utf8', (err, data) => {
        if (err) throw err;
        try {
            let products = JSON.parse(data);

            callback(null, products) ;
        } catch(e) {
            callback(e);
        }

        // event stdin
    });
}

function updateProducts(products) {
    fs.writeFile(`${__dirname}/${file}`, JSON.stringify(products), (err) => {
        if (err) throw err;
    });
}

function getAllProducts() {
    console.log('Bienvenue. Voici les produits disponibles :');
    listProducts((err, products) => {
        if (err) throw err;

        products.forEach(function(product) {
            console.log(`${product.id} - ${product.name} / ${product.EUR_price} / ${product.orders_counter}`);
        });
    });
}

function orderProductById(id) {
    listProducts((err, products) => {
        if (err) throw err;

        let product = products.find((product) => {
            return product.id === id;
        });

        product.orders_counter++;
        updateProducts(products);
        console.log('Commande terminée');
    });
}

/*var rl = readline.createInterface({
    input: process.stdin,
    output: process.outtput,
    terminal: false
});

rl.on('line', function (line) {
    let splitedLine = line.split('i want product ');
    if (splitedLine.length === 2) {
        orderProductById(parseInt(splitedLine[1]));
    }
});*/

//orderProductById(2);
//getAllProducts()
