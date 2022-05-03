'use strict';

const tableName = 'heroes'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex(tableName, ['dna'], { unique:true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex(tableName, tableName + '_dna');
  }
};
