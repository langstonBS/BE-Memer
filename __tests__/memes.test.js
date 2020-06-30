const { prepare } = require('../db/data-helpers');
const app = require('../lib/app');
const request = require('supertest');
const Meme = require('../lib/models/Meme');

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
  it('gets all Memes via GET', async() => {
    const memes = prepare(await Meme.find());

    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(memes);
      });
  });
});

