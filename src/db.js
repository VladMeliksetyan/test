const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "testdb",
  password: "099995457",
  port: 5432,
});

module.exports = pool;
