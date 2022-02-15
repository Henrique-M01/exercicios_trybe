const express = require('express');
const bodyParse = require('body-parser');
const validLogin = require('./Middlewares/validLogin');

const app = express();
app.use(bodyParse.json());

app.post('/user/register', validLogin);

app.listen(3000, console.log('Porta 3000 rodando'))
