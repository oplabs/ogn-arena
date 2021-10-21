'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.NFT, {
        foreignKey: 'ownedBy'
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    walletAddress: DataTypes.STRING,
    emailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
    data: DataTypes.JSONB,
    walletState: DataTypes.JSONB,
    // Last time a non-important (ex.: marketing) email was sent to the user.
    lastEmailSent: DataTypes.DATE,
    otpKey: DataTypes.STRING,
    otpVerified: DataTypes.BOOLEAN,
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
  }, {
    sequelize,
    indexes: [
        {
          name: 'users_name',
          fields: ['name'],
          using: 'btree'
        },
        {
          name: 'users_email',
          fields: ['email'],
          using: 'btree'
        } ],
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};
