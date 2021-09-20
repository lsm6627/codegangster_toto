'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('todos', 'user_todo', Sequelize.INTEGER);

   await queryInterface.addConstraint('todos', {
     fields: ['user_todo'],
     type: 'foreign key',
     name: 'FK_userTodo',
     references: {
       table: 'Users',
       field: 'id'
     },
     onDelete: 'cascade',
     onUpdate: 'cascade'
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('todos', 'FK_userTodo');
    await queryInterface.removeColumn('todos', 'user_todo');
  }
};
