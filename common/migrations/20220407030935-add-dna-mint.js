'use strict';
const tableName = 'heroes'

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn(
        tableName,
        'token_id',
        {
          type: Sequelize.STRING
        }
      );
      await queryInterface.addColumn(
        tableName,
        'no_mint',
        {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }
      );
      await queryInterface.addColumn(
        tableName,
        'dna',
        {
          type: Sequelize.STRING,
        }
      );
      await queryInterface.addIndex(tableName, ['token_id'])

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      tableName,
      'token_id'
    );
    await queryInterface.removeColumn(
      tableName,
      'no_mint'
    );
    await queryInterface.removeColumn(
      tableName,
      'dna'
    );
  }
};
