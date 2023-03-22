const Users = require('./User');
const Animal = require('./Animal');
const Product = require('./Product');

Users.hasMany(Animal, {
  foreignKey: 'user_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { Users, Animal, Product };
