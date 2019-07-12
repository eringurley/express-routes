const { Router } = require('express');

const items = [];

module.exports = Router()
  //what we recieve
  .post('/', (req, res) => {
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

  .get('/', (req, res) => {
    res.send(items);
  })

  .get('/:id', (req, res) => {
    res.send(items[req.params.id]);
  })

  .put('/:id', (req, res) => {
    const  {
      name, 
      species, 
      likes,
      dislikes
    } = req.body;

    const updatedItem = {
      name, 
      species, 
      likes,
      dislikes
    };

    items[req.params.id] = updatedItem;
    res.send(updatedItem);
  });

