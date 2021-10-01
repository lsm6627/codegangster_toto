const { isAuthorized } = require('../tokenFunctions');
const { User } = require('../../models');

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    return res.status(403).json("no token in req.headers['authorization']");
  }
  const { userId } = accessTokenData;
  User.findOne({ where: { userId } })
    .then((data) => {
      if (!data) {
        return res
          .status(401)
          .json({ data: null, message: 'data;;;not authorized' });
      }
      delete data.dataValues.password;
      return res.json({ data: { userInfo: data.dataValues }, message: 'ok' });
    })
    .catch((err) => {
      console.log('accessTokenData;;;not authorized', err);
    });
};
