var readline = require('readline');
var readline = require('os');

var rl = readline.createInterface({
        input: process.stdin,
        output: process.outtput,
        terminal: false
});

console.log(__dirname, __filename);

console.log(os.uptime);
console.log(process.uptime);

rl.on('line', function (line) {
    console.log(line);
});
