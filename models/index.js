const User = require('./User');
const Species = require('./Species');
const Animal = require('./Animal');
const Product = require('./Product');


User.hasMany(Animal, {
  foreignKey: 'user_id',
});

Animal.belongsTo(User, {
  foreignKey: 'user_id',
});

Species.hasMany(User, {
  foreignKey: 'species_id',
})

Animal.belongsTo(Species, {
  foreignKey: 'species_id'
})

Species.hasMany(Product, {
  foreign_key: 'specie_id'
})

Product.belongsTo(Species, {
  foreignKey: 'specie_id'
})

module.exports = { User, Animal, Product, Species };
