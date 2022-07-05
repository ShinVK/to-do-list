'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('statuses', [
      {
      name: 'pendente',
      },
      {
      name: 'em andamento',
      },
      {
      name: 'pronto',
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('statuses', null, {});
  }
};
