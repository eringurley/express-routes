const request = require('supertest');
const app = require('../lib/app');


//Crud: create, read, update, delete
describe('items routes', () => {
  it('can create an item with POST', () => {
    return request(app)
      .post('/api/v1/items')
      .send(
        {
          name: 'Meowsy',
          species : 'cat',
          likes: 'tuna',
          dislikes: 'ham'
        })
      .then(res => {
        console.log(res.body);
        expect(res.body).toEqual([{
          name: 'Meowsy',
          species : 'cat',
          likes: 'tuna',
          dislikes: 'ham'
        }]);
      });
  });

  it('can get an array of items with GET', () => {
    return request(app)
      .get('/api/v1/items')
      .then(res => {
        expect(res.body).toEqual([{
          name: 'Meowsy',
          species : 'cat',
          likes: 'tuna',
          dislikes: 'ham'
        }]);
      });
  });

  it('can get an item by index', () => {
    return request(app)
      .get('/api/v1/items/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Meowsy',
          species : 'cat',
          likes: 'tuna',
          dislikes: 'ham'
        });
      });
  });

  it('can update an item with PUT', () => {
    const newItem = {
      name: 'Panda',
      species: 'lion',
      likes: 'peaches',
      dislikes: 'computers'
    };
    return request(app)
      .put('/api/v1/items/0')
      .send(newItem)
      .then(res => {
        expect(res.body).toEqual({
          name: 'Panda',
          species: 'lion',
          likes: 'peaches',
          dislikes: 'computers'
        });
      });
  });

  it('can delete an item by index', () => {
    return request(app)
      .delete('/api/v1/items/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Panda',
          species: 'lion',
          likes: 'peaches',
          dislikes: 'computers'
        });
      });
  });
});







// {
//   'name': 'Barky',
//   'species' : 'dog',
//   'likes': 'bones',
//   'dislikes': 'tuna'
// },
// {
//   'name': 'Purrpaws',
//   'species' : 'cat',
//   'likes': 'mice',
//   'dislikes': 'cookies'
// }, 
