const Pool = require("pg").Pool;
const path = require('path');
require("dotenv").config({
  path: path.resolve(__dirname, '../.env')
});

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


module.exports = pool;
