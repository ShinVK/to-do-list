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
      { name: 'ir ao banco',
        status_id: 1,
        category_id: 3,
        created: new Date(),
        updated: new Date(),
      },
      { name: 'arrumar a mala',
        status_id: 3,
        category_id: 2,
        created: new Date(),
        updated: new Date(),
      },
      { name: 'Atualizar projeto',
        status_id: 2,
        category_id: 2,
        created: new Date(),
        updated: new Date(),
      },
      { name: 'fazer commits',
        status_id: 1,
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
