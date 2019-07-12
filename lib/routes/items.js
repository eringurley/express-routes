const { Router } = require('express');

const items = [];

module.exports = Router()
  //what we recieve
  .post('/api/v1/items', (req, res) => {
    const {
      name,
      species,
      likes,
      dislikes
    } = req.body;

    //create an item to store
    const item = {
      name, 
      species, 
      likes, 
      dislikes
    };

    items.push (item);
    res.send(items);
  })

  .get('/api/v1/items', (req, res) => {
    res.send(items);
  }); 


