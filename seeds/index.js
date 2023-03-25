const sequelize = require("../config/connection");
const seedProduct = require("./product-seeds");
const seedSpecies = require("./Species-seeds");
const seedUser = require("./user-seeds");
const seedAnimal = require("./animal-seeds");


const seedFluffy = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedSpecies();

  await seedAnimal();

  await seedProduct();

  process.exit(0);
};

seedFluffy();
