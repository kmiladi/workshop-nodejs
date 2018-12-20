const dns = require ('dns');

dns.lookup('www.doctissimo.fr', function onLookup(err, adress, family) {
    console.log('ip: ', adress);
    dns.reverse(adress, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }

        console.log(hostnames);
    });
});
