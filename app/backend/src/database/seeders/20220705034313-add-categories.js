'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('categories', [
      {
      name: 'estudo',
      },
      {
      name: 'trabalho',
      },
      {
      name: 'pessoal',
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('status', null, {});
  }
};
