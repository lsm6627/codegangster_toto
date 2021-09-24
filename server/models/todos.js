'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.todos.belongsTo(models.User, {
        foreignKey: { allowNull: false, name: 'userId' }
      });
    }
<<<<<<< HEAD
  }
  todos.init(
    {
      todo: DataTypes.STRING,
      d_day: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'todos'
    }
  );
=======
  };
  todos.init({
    todo: DataTypes.STRING,
    d_day: {
      allowNull: false,
      type: DataTypes.STRING
    },
    isChecked: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'todos',
  });
>>>>>>> d7860b9df42564d39e97e69f4892592cff5f6eca
  return todos;
};
