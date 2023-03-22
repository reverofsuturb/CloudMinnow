const { Animal } = require('../models');

const animalData = [
  {
    name: 'Meow',
    age: 5,
    description: 'Playfull, likes to hide in the closet.',
    specie_id: 2,
  },
  
  {
    name: 'Bark',
    age: 6,
    description: 'Barks and runs.',
    specie_id: 1,
  },
  {
    name: 'Baguette',
    age: 8,
    description: 'Likes to eat and sleep.',
    specie_id: 1,
  },
  {
    name: 'Bella',
    age: 4,
    description: 'Likes to hide in a closet.',
    specie_id: 2,
  },
  {
    name: 'Simba',
    age: 9,
    description: 'Steals random objects.',
    specie_id: 2,
  },
  {
    name: 'Rocky',
    age: 10,
    description: 'Playfull and fluffy .',
    specie_id: 1,
  },
  
  

];

const seedAnimal = () => Animal.bulkCreate(animalData);

module.exports = seedAnimal;