const express = require('express');
const app = express();

let send = require('../controller/emailController');


app.post('/send',send.sendEmail);
module.exports = app;