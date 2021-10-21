'use strict';

const tableName = 'users'

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
      password_hash: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      wallet_address: {
        type: Sequelize.STRING
      },
     email_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      last_email_sent: {
        type: Sequelize.DATE
      },
      // Key used for OTP authentication
      otp_key: {
        type: Sequelize.STRING
      },
      otp_verified: {
        type: Sequelize.BOOLEAN
      },
      data: {
        type: Sequelize.JSONB
      },
      wallet_state: {
        type: Sequelize.JSONB
      },
      is_admin: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.addIndex(tableName, ['name'], { unique: true })
    await queryInterface.addIndex(tableName, ['email'], { unique: true })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  }
};
