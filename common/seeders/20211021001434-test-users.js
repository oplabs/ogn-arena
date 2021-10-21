'use strict';

const { genPasswordHash, matchPasswordHash } = require('../src/logic/user')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const password_hash = await genPasswordHash('password')
    const [user] = await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'TestAmin',
          email: 'testadmin@originprotocol.com',
          password_hash,
          email_verified: true,
          is_admin: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'TestPlayer',
          email: 'testplayer@originprotocol.com',
          password_hash,
          email_verified: true,
          is_admin: true,
          created_at: new Date(),
          updated_at: new Date()

        }
      ],
      { returning: ['id'] }
    )

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return Promise.resolve()
  }
};
