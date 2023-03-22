const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(13, 2),
        allowNull: false,
        validate: {
          isDecimal: true
        }
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        Validate: {
          isNumeric: true
        }
      },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    animal_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'animal',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = Product;