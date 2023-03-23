const { Species } = require("../models");

const speciesData = [
  {
    species_type: "dog",
  },
  {
    species_type: "cat",
  },
];

const seedSpecies = () => Species.bulkCreate(speciesData);

module.exports = seedSpecies;
