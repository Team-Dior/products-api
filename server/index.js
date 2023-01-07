require('dotenv').config();
const express = require('express');
const path = require('path');

const morgan = require('morgan');
const cors = require('cors');

const app = express();
const router = require('./router');

// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('There is no server at ', process.env.PORT);
  } else {
    console.log('Listening on Port ', process.env.PORT);
  }
});
