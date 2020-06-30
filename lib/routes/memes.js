const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()

  .post('/', (req, res, next) => {
    Meme
      .create(req.body)
      .then(meme => res.send(meme))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Meme
      .find()
      .select()
      .then(memes => res.send(memes))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Meme
      .findById(req.params.id)
      .then(memes => res.send(memes))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Meme
      .findByIdAndUpdate(req.params.id,
        req.body,
        { new: true })
      .then(memes => res.send(memes))
      .catch(next);
  });


