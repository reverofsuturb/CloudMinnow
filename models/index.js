const User = require('./User');
const Animal = require('./Animal');
const Product = require('./Product');
const Species = require('./Species');

User.hasMany(Animal, {
  foreignKey: 'user_id',
});

Animal.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Animal, Product, Species };
