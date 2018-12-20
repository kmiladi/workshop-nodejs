var p6 = () => {
    return new Promise((resolve, reject) => {
        setTimeout((param) => {
            resolve(param)
        }, 1000, 'setTimeout-1');
    });
}
setTimeout((param) => {
    p6().then ((response) => {
        console.log('then', response, param)
    })
}, 1000, 'setTimeout-2');
