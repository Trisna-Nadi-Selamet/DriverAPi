'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  driver.init({
    lat: {
      type:DataTypes.FLOAT,
      validate:{
        notEmpty:{
          message:"lat must not be empty"
        }
      } 
    },
    lon: {
      type:DataTypes.FLOAT,
      validate:{
        notEmpty:{
          message:"lon must not be empty"
        }
      } 
    },
    status: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          message:"status must not be empty"
        }
      } 
    }
  }, {
    sequelize,
    modelName: 'driver',
  });
  return driver;
};