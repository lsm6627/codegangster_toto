const { User } = require('../../models');

const crypto = require('crypto');

module.exports = (req, res) => {
  const { userId, password } = req.body;

  let inputPassword = password;
  let salt = Math.round(new Date().valueOf() * Math.random()) + '';
  let hashPassword = crypto
    .createHash('sha512')
    .update(inputPassword + salt)
    .digest('hex');

  User.findOne({
    where: {
      userId
    }
  })
    .then((data) => {
      if (!data) {
        return res.status(403).json({ data: null, message: 'duplicated id' });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};
