const Owner = require('./Owner');
const Animal= require('./Animal');
const Product = require('./Product');


Animal.belongsTo(Owner, {
  foreignKey: 'owner_id',
});


module.exports = { Owner, Animal, Product };
