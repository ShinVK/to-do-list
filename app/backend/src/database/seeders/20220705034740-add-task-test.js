'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('tasks', [
      { name: 'terminar o projeto to-do-list',
        status_id: 2,
        category_id: 1,
        created: new Date(),
        updated: new Date(),
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('tasks', null, {});

  }
};
