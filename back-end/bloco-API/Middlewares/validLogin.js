const fs = require('fs/promises');
const validateEmail = require('../services/validateEmail')

async function validLogin(req, res) {
  const MIN_NUMBER_PASSWORD = 4;
  const MAX_NUMBER_PASSWORD = 8;
  const { userName, email, password } = req.body;
  if (userName.length > 3 &&
      validateEmail(email) &&
      password.length >= MIN_NUMBER_PASSWORD &&
      password.length <= MAX_NUMBER_PASSWORD) {
    const objJson = { userName, email, password}
    console.log(objJson);
    await fs.writeFile('../users.json', JSON.stringify(objJson))
    return res.status(200).send({ "message": "user created" });
  }
  return res.status(400).send({ message: "invalid data"});

};

module.exports = validLogin;
