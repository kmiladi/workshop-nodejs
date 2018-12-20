function resolveAfter2Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('resolved'), 2000);
    })
}

async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    console.log('end sync');

    return result
}

asyncCall().then((response) => {
    console.log('then', response)
})

console.log('enad all')