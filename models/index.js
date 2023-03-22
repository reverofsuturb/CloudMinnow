const Users = require('./User');
const Animal = require('./Animal');
const Product = require('./Product');

Users.hasMany(Animal, {
  foreignKey: 'user_id',
});

Animal.belongsTo(Users, {
  foreignKey: 'user_id',
});

module.exports = { Users, Animal, Product };
