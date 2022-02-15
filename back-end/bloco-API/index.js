const express = require('express');
const bodyParse = require('body-parser');
const validLogin = require('./Middlewares/validLogin.js');
const validToken = require('./Middlewares/validToken.js');
const validLoginAndReturnToken = require('./Middlewares/validLoginAndReturnToken.js')

const app = express();
app.use(bodyParse.json());

app.get('/btc/price', validToken);

app.post('/user/register', validLogin);

app.post('/user/login', validLoginAndReturnToken)

app.listen(3000, console.log('Porta 3000 rodando'))
