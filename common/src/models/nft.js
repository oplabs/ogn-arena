'use strict';
const {
  Model
} = require('sequelize');

const { NFTStatuses, EntityType } = require('../enums')

module.exports = (sequelize, DataTypes) => {
  class NFT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      NFT.belongsTo(models.User, {
        foreignKey: 'ownedBy'
      })
    }
  };
  NFT.init({
    tokenId: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.ENUM(EntityType),
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    video: DataTypes.STRING,
    externalUrl: DataTypes.STRING,
    status: DataTypes.ENUM(NFTStatuses),
    ownedBy: DataTypes.INTEGER, // Maps to user.id
    walletAddress: DataTypes.STRING,
  }, {
    sequelize,
    indexes: [
        {
          name: 'nfts_token_id',
          fields: ['token_id'],
          using: 'BTREE'
        },
        {
          name: 'nfts_owned_by',
          fields: ['owned_by'],
          using: 'BTREE'
        },

        {
          name: 'nfts_status',
          fields: ['status'],
          using: 'BTREE'
        }
      ],

    modelName: 'NFT',
    tableName: 'nfts'
  });
  return NFT;
};
