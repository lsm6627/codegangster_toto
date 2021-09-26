const { User } = require('../../models');

const crypto = require('crypto');

module.exports = (req, res) => {
  const { userId, password, email } = req.body;

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
      if (data) {
        return res.status(403).json({ data: null, message: 'duplicated id' });
      }
    })
    .catch((err) => {
      res.json(err);
    });

  User.create({
    userId: userId,
    password: hashPassword,
    email: email,
    salt: salt
  })
    .then((data) => {
      res.status(200).json({ data: data, message: 'created' });
      // * 클라이언트 사이드 라우팅 가능? 아니면 여기서
      //* 응답 주고 라우팅 가능? res.redirect(`http://localhost:3000/login`) 
    })
    .catch((err) => {
      res.json(err);
    });
};