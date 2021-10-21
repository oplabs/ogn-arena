'use strict';

const { NFTStatuses, EntityType } = require('../src/enums')

const tableName = 'nfts'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      token_id: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM(EntityType)
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.STRING
      },
      external_url: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM(NFTStatuses)
      },
      sale_price: {
        type: Sequelize.BIGINT
      },
      owned_by: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE'
      },
      wallet_address: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex(tableName, ['token_id'], {
      unique: true
    })
    await queryInterface.addIndex(tableName, ['owned_by'])
    await queryInterface.addIndex(tableName, ['status'])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  }
};
