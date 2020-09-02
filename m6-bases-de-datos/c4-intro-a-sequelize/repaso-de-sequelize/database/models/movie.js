'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movie.init({
    title: DataTypes.STRING(500),
    rating: DataTypes.DECIMAL(3.1),
    awards: DataTypes.INTEGER,
    length: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movie'
  });
  return Movie;
};