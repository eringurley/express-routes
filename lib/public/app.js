const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/v1/items', (req,res) => {

});

module.exports = app;
