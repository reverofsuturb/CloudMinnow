const { Species } = require("../models");

const speciesData = [
  {
    specie_type: "dog",
  },
  {
    specie_type: "cat",
  },
];

const seedSpecies = () => Species.bulkCreate(speciesData);

module.exports = seedSpecies;
