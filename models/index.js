const owner = require('./Owner');
const animal= require('./Animal');
const product = require('./Product');


animal.belongsTo(owner, {
  foreignKey: 'owner_id',
});


module.exports = { owner, animal, product };
