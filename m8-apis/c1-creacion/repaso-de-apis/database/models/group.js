'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.category);
      this.belongsToMany(models.tag, { through: 'groups_tags'})
    }
  };
  Group.init({
    category_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    repository: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'group',
  });
  return Group;
};