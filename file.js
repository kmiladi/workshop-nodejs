let fs = require('fs');
/*let files = fs.readdirSync(__dirname + '/files/');

files.forEach((file) => {
    const contents = fs.readFileSync(`${__dirname}/files/${file}`, 'utf8');
    console.log(contents);
})*/

var file = '1.txt';
fs.readFile(`${__dirname}/files/${file}`, 'utf8', (err, file) => {
    console.log(err, file);
});

console.log('end');
