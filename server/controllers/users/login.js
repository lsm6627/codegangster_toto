const { User } = require('../../models');
const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken
} = require('../tokenFunctions');
const crypto = require('crypto');

module.exports = (req, res) => {
  const { userId, password } = req.body;
  User.findOne({
    where: {
      userId
    }
  }).then((data) => {
    if (!data) {
      return res.status(401).json({ data: null, message: 'not registered' });
    } else {
      let hashPassword = crypto
        .createHash('sha512')
        .update(password + data.salt)
        .digest('hex');

      User.findOne({
        where: {
          password: hashPassword
        }
      })
        .then((data) => {
          if (!data) {
            return res
              .status(401)
              .send({ data: null, message: 'not authorized' });
          }
          delete data.dataValues.password;
          const accessToken = generateAccessToken(data.dataValues);
          const refreshToken = generateRefreshToken(data.dataValues);

          sendRefreshToken(res, refreshToken);
          sendAccessToken(res, accessToken);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};
