const pool = require("./db");
const queries = require("./queries");
const { uuid } = require("uuidv4");
const path = require("path");
const bcrypt = require("bcrypt");

let TaskId;
const registerUser = async (req, res) => {
  let { name, email, password } = req.body;
  const id = uuid();
  const hashedPassword = await bcrypt.hash(password, 10);

  pool.query(queries.addUserInTasks, [id], (error, result) => {
    if (error) throw error;
    res.status(200);
  });

  pool.query(
    queries.addUser,
    [id, name, email, hashedPassword],
    (error, result) => {
      if (error) throw error;
      res.status(201).redirect("/login");
    }
  );
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  let user = await (await pool.query(queries.userLogin, [email])).rows[0];
  TaskId = user.id;

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      res.status(200).redirect("/app");
    } else {
      res.send("wrong password");
    }
  } else {
    res.status(404).send("User does not exist");
  }
};

const addTasks = (req, res) => {
  const { taskname, task1, task2, task3 } = req.body;

  pool.query(
    queries.addTasks,
    [taskname, task1, task2, task3, TaskId],
    (error, result) => {
      if (error) throw error;
      res.send("Tasks added");
    }
  );
};

const userLogOut = (req, res) => {
  res.status(200).redirect("/login");
};

const displayRegisterPage = (req, res) => {
  res.sendFile(path.resolve("/home/vladimir/Desktop/CRUD/views/register.html"));
};

const diplayloginUserPage = (req, res) => {
  res.sendFile(path.resolve("/home/vladimir/Desktop/CRUD/views/login.html"));
};

const displayLogoutPage = (req, res) => {
  res.sendFile(path.resolve("/home/vladimir/Desktop/CRUD/views/logout.html"));
};

const appPage = (req, res) => {
  res.sendFile(path.resolve("/home/vladimir/Desktop/CRUD/views/app.html"));
};

module.exports = {
  registerUser,
  loginUser,
  displayRegisterPage,
  diplayloginUserPage,
  displayLogoutPage,
  userLogOut,
  appPage,
  addTasks,
};
