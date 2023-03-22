const { Specie } = require('../models');

const specieData = [
  {
    specie_type: 'dog',
  },
  {
    specie_type: 'cat',
  },
  {
    specie_type: 'dog',
  },
  {
    specie_type: 'cat',
  },
  {
    specie_type: 'cat',
  },
  {
    specie_type: 'dog',
  },
  {
    specie_type: 'cat',
  },


];

const seedSpecies = () => Specie.bulkCreate(specieData);

module.exports = seedSpecies;