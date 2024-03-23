
const express = require('express');
const app = express();

app.get('/profile/:name', (req, res) => {
    res.send(`Hi i am ${req.params.name}`)
})

app.listen(5000)