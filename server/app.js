const express = require('express');
const app = express();
const port = 7999;



app.get('/', function (req, res) {
    res.send('hello world')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})