const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Species extends Model {}

Species.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    species_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "species",
  }
);

module.exports = Species;
