const pool = require("./db");
const queries = require("./queries");
const { uuid } = require("uuidv4");
const path = require("path");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  let { name, email, password } = req.body;
  const id = uuid();
  const hashedPassword = await bcrypt.hash(password, 10);

  pool.query(queries.addUser, [id, name, email, hashedPassword], (error, result) => {
    if (error) throw error;
    res.status(201).send("User registered succsessfuly");
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  let user = await (await pool.query(queries.userLogin, [email])).rows[0];

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      res.status(200).send("user Successfuly logged in");
    } else {
      res.send("wrong password");
    }
  } else {
    res.status(404).send("User does not exist");
  }
};

const displayRegisterPage = (req, res) => {
  res.sendFile(path.resolve("/home/vladimir/Desktop/CRUD/views/register.html"));
};

const diplayloginUserPage = (req, res) => {
  res.sendFile(path.resolve("/home/vladimir/Desktop/CRUD/views/login.html"));
};

module.exports = {
  registerUser,
  loginUser,
  displayRegisterPage,
  diplayloginUserPage,
};
