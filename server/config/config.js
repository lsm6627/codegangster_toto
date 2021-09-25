const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
<<<<<<< HEAD
    "username": "root",
    "password": process.env.DATABASE_PASSWORD,
    "database": "todolist",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  test: {
    "username": "root",
    "password": process.env.DATABASE_PASSWORD,
    "database": "todolist",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  production: {
    "username": "root",
    "password": process.env.DATABASE_PASSWORD,
    "database": "todolist",
    "host": "127.0.0.1",
    "dialect": "mysql"
=======
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'todolist',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'todolist',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'todolist',
    host: '127.0.0.1',
    dialect: 'mysql'
>>>>>>> 501dce3d8c31f3c495569953f0d6e0efa20f0c73
  }
};
