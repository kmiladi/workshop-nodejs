var p1 = new Promise((resolve, reject) => {
    setTimeout((param) => {
        console.log(param)
        resolve(param)
    }, 1000, 'un');
});

var p2 = new Promise((resolve, reject) => {
    setTimeout((param) => {
        console.log(param)
        resolve(param)
    }, 2000, 'deux');
});

var p3 = new Promise((resolve, reject) => {
    setTimeout((param) => {
        console.log(param)
        resolve(param)
    }, 3000, 'trois');
});

var p4 = new Promise((resolve, reject) => {
    setTimeout((param) => {
        console.log(param)
        resolve(param)
    }, 4000, 'quatre');
});

var p5 = new Promise((resolve, reject) => {
    setTimeout((param) => {
        console.log(param)
        reject('reject ' + param)
    }, 2500, 'cinq');
});

Promise
    .race([p1, p2, p3, p4, p5])
    .then(values => {
        console.log("all race ", values);
    })
    .catch(reason => {
        console.log("all catch ", reason)
    })
