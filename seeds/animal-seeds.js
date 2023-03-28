const { Animal } = require("../models");

const animalData = [
  {
    name: "Meow",
    age: 5,
    description: "Playfull, likes to hide in the closet.",
    filename: "96-sleepy-cat.jpg",
    user_id: 1,
    species_id: 2,
  },

  {
    name: "Bark",
    age: 6,
    description: "Barks and runs.",
    filename: "97-home-dog.jpg",
    user_id: 5,
    species_id: 1,
  },
  {
    name: "Baguette",
    age: 8,
    description: "Likes to eat and sleep.",
    filename: "98-happy-dog.jpg",
    user_id: 3,
    species_id: 1,
  },
  {
    name: "Bella",
    age: 4,
    description: "Likes to hide in a closet.",
    filename: "95-waiting-cat.jpg",
    user_id: 4,
    species_id: 2,
  },
  {
    name: "Simba",
    age: 9,
    description: "Steals random objects.",
    filename: "94-walking-cat.jpg",
    user_id: 5,
    species_id: 2,
  },
  {
    name: "Rocky",
    age: 10,
    description: "Playfull and fluffy .",
    filename: "99-dog-general.jpg",
    user_id: 6,
    species_id: 1,
  },
];

const seedAnimal = () => Animal.bulkCreate(animalData);

module.exports = seedAnimal;
