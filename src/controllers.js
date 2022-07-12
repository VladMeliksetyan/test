const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "testdb",
  password: "099995457",
  port: 5432,
});

client.connect();
const getAllUsers = () =>{
    `SELECT * FROM users`,
    (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(res.rows[0]);
      }
    }
}
const addData = (id,name) => {
  client.query(
    `INSERT INTO users (id,name) VALUES (${id},'${name}')`,
    (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(res.rows[0]);
      }
    }
  );
};

module.exports = {addData,getAllUsers}