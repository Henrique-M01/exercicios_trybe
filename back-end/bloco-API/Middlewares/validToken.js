const axios = require('axios');

async function validToken(req, res) {
  const MAX_LENGTH_TOKEN = 12;
  const { authorization } = req.headers;
  if ( authorization.length === MAX_LENGTH_TOKEN) {
      const data = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
      return res.status(200).send(data.data.bpi);
  }
  return res.status(401).send({ "message": "invalid token"});

};

module.exports = validToken;