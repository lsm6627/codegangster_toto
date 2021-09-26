const { sign } = require('jsonwebtoken');
const signup = require('./users/signup');

module.exports = {
  login: require('./users/login'),
  accessTokenRequest: require('./users/accessTokenRequest'),
  refreshTokenRequest: require('./users/refreshTokenRequest'),
  todo: require('./todo'),
  signup: require('./users/signup')
};
