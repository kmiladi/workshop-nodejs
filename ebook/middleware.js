const express = require('express');
const app = express();
const port = 3000;

app.use(function (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

app.get('/', (req, res) => res.send('Hello Word!'));

app.listen(port, () => console.log(`Èxample app listening on port ${port}`));
