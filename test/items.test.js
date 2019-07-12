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
