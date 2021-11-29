'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Hero.init({
    name: DataTypes.STRING,
    charClass: DataTypes.STRING,
    firstName:DataTypes.STRING,
    lastName:DataTypes.STRING,
    gender:DataTypes.STRING,
    race:DataTypes.STRING,
    description: DataTypes.STRING,
    str: DataTypes.INTEGER,
    dex: DataTypes.INTEGER,
    con: DataTypes.INTEGER,
    int: DataTypes.INTEGER,
    wis: DataTypes.INTEGER,
    cha: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    experience: DataTypes.INTEGER,
    resourceId:DataTypes.STRING,
    ownedBy: DataTypes.INTEGER,
    walletAddress: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    ccAttrs: DataTypes.JSONB,
    badParts: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes'
  });
  return Hero;
};
