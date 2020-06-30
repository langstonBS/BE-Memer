const chance = require('chance').Chance();
const Meme = require('../lib/models/Meme');


module.exports = async({ memes = 100 } = {}) => { 
  await Meme.create([...Array(memes)].map(() => ({
    top: chance.word(),
    image: chance.url(),
    bottom: chance.sentence(),
  })));

};
