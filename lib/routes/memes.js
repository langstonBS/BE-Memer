const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()

  .post('/', (req, res, next) => {
    Meme
      .create({ ...req.body, user: req.user._id })
      .then(meme => res.send(meme))
      .catch(next);
  });
