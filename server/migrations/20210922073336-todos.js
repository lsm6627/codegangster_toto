'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      todo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      d_day: {
        allowNull: false,
<<<<<<< HEAD
        type: Sequelize.INTEGER
=======
        type: Sequelize.STRING
      },
      isChecked: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
>>>>>>> d7860b9df42564d39e97e69f4892592cff5f6eca
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('todos');
  }
};
