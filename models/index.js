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

module.exports = { User, Animal, Product, Species };
