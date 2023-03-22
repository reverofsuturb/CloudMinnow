const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Species extends Model {}

Species.init(
  {
    specie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    specie_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'species',
  }
);

module.exports = Species;