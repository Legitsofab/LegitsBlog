'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('tutorials', 'likesCount', {
      type: Sequelize.DataTypes.BIGINT,
      defaultValue: 0,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('tutorials', 'author', {
      type: 'INTEGER USING CAST("author" as INTEGER)',
      defaultValue: 0
    });
  }
};
