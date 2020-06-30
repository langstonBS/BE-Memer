const { prepare } = require('../db/data-helpers');
const app = require('../lib/app');
const request = require('supertest');

describe('Meme routs', () => {
  it('creates a meme via POST', async() => {
      
    
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'this is the top',
        image: 'this is the middle',
        bottom: 'this is the the bottom',
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          top: 'this is the top',
          image: 'this is the middle',
          bottom: 'this is the the bottom',
          __v: 0
        });
      });
  });
});

