'use strict';

const tableName = 'heroes'

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn(
        tableName,
        'cc_attrs',
        {
          type: Sequelize.JSONB
        }
      )
      await queryInterface.addColumn(
        tableName,
        'rating',
        {
          type: Sequelize.INTEGER
        }
      )
      await queryInterface.addColumn(
        tableName,
        'bad_parts',
        {
          type: Sequelize.JSONB
        }
      )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      tableName,
      'cc_attrs'
    );
    await queryInterface.removeColumn(
      tableName,
      'rating'
    );
    await queryInterface.removeColumn(
      tableName,
      'bad_parts'
    );


  }
};
