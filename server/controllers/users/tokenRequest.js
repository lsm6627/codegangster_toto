const { isAuthorized } = require('../tokenFunctions');

const {
  checkRefeshToken,
  generateAccessToken,
  resendAccessToken
} = require('../tokenFunctions');

const { User } = require('../../models');

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    console.log("!!!no token in req.headers['authorization']");

    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      console.log(
        "refresh token does not exist, you've never logged in before"
      );
      return res
        .status(403)
        .json("refresh token does not exist, you've never logged in before");
    }

    const refreshTokenData = checkRefeshToken(refreshToken);
    if (!refreshTokenData) {
      console.log('invalid refresh token, please log in again');
      return res.json({
        data: null,
        message: 'invalid refresh token, please log in again'
      });
    }

    const { userId } = refreshTokenData;
    User.findOne({ where: { userId } })
      .then((data) => {
        if (!data) {
          return res.send(400);
        }
        delete data.dataValues.password;
        delete data.dataValues.salt;

        const newAccessToken = generateAccessToken(data.dataValues);
        resendAccessToken(res, newAccessToken, data.dataValues);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log('Yes AccessToken');
    const { userId } = accessTokenData;
    User.findOne({ where: { userId } })
      .then((data) => {
        if (!data) {
          return res
            .status(401)
            .json({ data: null, message: 'data;;;not authorized' });
        }
        delete data.dataValues.password;
        delete data.dataValues.salt;
        return res.json({ data: { userInfo: data.dataValues }, message: 'ok' });
      })
      .catch((err) => {
        console.log('accessTokenData;;;not authorized', err);
      });
  }
};
