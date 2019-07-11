const express = require('express');
const app = express();
const itemRoutes = require('./routes/items');

app.use(express.json());

app.use(itemRoutes);

app.post('/api/v1/items', (req, res) => {

});

module.exports = app;
