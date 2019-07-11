const { Router } = require('express');

const items = [];

module.exports = Router()
  .post('/api/v1/items', (req, res) => {
    const {
      name,
      species,
      likes,
      dislikes
    } = req.body;
    
    items.push ({ name, species, likes, dislikes });
    res.send({
      name, 
      species, 
      likes, 
      dislikes
    });
  });

