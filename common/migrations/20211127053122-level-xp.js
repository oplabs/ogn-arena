'use strict';

const tableName = 'heroes'

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn(
        tableName,
        'level',
        {
          type: Sequelize.INTEGER,
          defaultValue: 1
        }
      )
      await queryInterface.addColumn(
        tableName,
        'experience',
        {
          type: Sequelize.INTEGER,
          defaultValue: 0
        }
      )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      tableName,
      'level'
    );
    await queryInterface.removeColumn(
      tableName,
      'experience'
    );

  }
};
