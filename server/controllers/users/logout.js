const { User } = require('../../models');
const crypto = require('crypto');

module.exports = (req, res) => {
  res
    .cookie('refreshToken', '', {
      httpOnly: true
    })
    .send('logout!');
};
