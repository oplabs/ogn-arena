'use strict';

const tableName = 'heroes';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      char_class: {
        type:Sequelize.STRING
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
      str: {
        type:Sequelize.INTEGER
      },
      dex: {
        type:Sequelize.INTEGER
      },
      con: {
        type:Sequelize.INTEGER
      },
      int: {
        type:Sequelize.INTEGER
      },
      wis: {
        type:Sequelize.INTEGER
      },
      cha: {
        type:Sequelize.INTEGER
      },
      resource_id: {
        type:Sequelize.STRING
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  }
};
