const express = require('express');
const app = express()
const port = process.env.PORT || '8080';

app.get('/', (req, res) => {

    res.send('hello tabnine');

})

app.listen(port, () => {

    console.log('Listening at port: ' + port);

})
