'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tutorials', [{
      title: 'seed Title Test1',
      description: "seed Desc Test1",
      published: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'seed Title Test2',
      description: "seed Desc Test2",
      published: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'seed Title Test3',
      description: "seed Desc Test3",
      published: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tutorials', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
