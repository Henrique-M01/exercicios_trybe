const crypto = require('crypto');
const validateEmail = require("../services/validateEmail");

function validLoginAndReturnToken(req, res) {
  const MIN_NUMBER_PASSWORD = 4;
  const MAX_NUMBER_PASSWORD = 8;
  const { email, password } = req.body;
  if ( validateEmail(email) &&
      password.length >= MIN_NUMBER_PASSWORD &&
      password.length <= MAX_NUMBER_PASSWORD) {
        const token = crypto.randomBytes(6).toString('hex');
        return res.status(200).send({ token });
  }
  return res.status(400).send({ "message": "email or password is incorrect"});

};

module.exports = validLoginAndReturnToken;