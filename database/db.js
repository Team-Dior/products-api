const path = require('path');
require('dotenv').config({path: './env'});
const { Pool } = require('pg')

const pool = new Pool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PGPORT
});

module.exports = {
  query: (text, params) => { return pool.query(text, params) },
  connect: () => {return pool.connect()}
}