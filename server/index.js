const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './env') });
const express = require('express');
const morgan = require('morgan');

const app = express();

const router = require('./router');

app.use(morgan('dev'));
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('There is no server at ', process.env.PORT);
  } else {
    console.log('Listening on Port ', process.env.PORT);
  }
});