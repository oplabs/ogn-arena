'use strict';

const tableName = 'heroes'

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn(
        tableName,
        'sort_order',
        {
          type: Sequelize.INTEGER
        }
      );
      await queryInterface.addIndex(tableName, ['sort_order'])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      tableName,
      'sort_order'
    );
  }
};
