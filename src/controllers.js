const pool = require("./db");
const queries = require("./queries");
const { uuid } = require("uuidv4");
const bcrypt = require("bcrypt");
const session = require("express-session");



const registerUser = async (req, res) => {
  let { username, email, password } = req.body;
  const id = uuid();
  const hashedPassword = await bcrypt.hash(password, 10);
  pool.query(
    queries.addUser,
    [id, username, email, hashedPassword],
    (error, result) => {
      if (error) throw error;
      res.status(201).redirect("/login");
    }
  );
};


let userId;
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  let user = await (await pool.query(queries.userLogin, [email])).rows[0];
  if (user) {
    //pool.query(queries.addSessionId, [req.session.id, email]);
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      userId = user.user_id
      res.status(200).send({ session: req.session.id });
    } else {
      res.send("wrong password");
    }
  } else {
    res.status(404).send("User does not exist");
  }
  console.log("user logedin");
  console.log("session id after login ", req.session.id);
};

const addTasks = async (req, res) => {
  const { text, day, reminder } = req.body;
  const task_id = uuid();
  // console.log(req.session.id);
  const user = await (
    await pool.query(queries.findUserBySession, [req.session.id])
  ).rows[0];
  //console.log(user.user_id);
  pool.query(
    queries.addTasks,
    [task_id, text, reminder, userId],
    (error, result) => {
      if (error) throw error;
      res.status(201).send(result.rows[0]);
    }
  );
};

const userLogOut = (req, res) => {
  userId = undefined;
  res.status(200).send("ok")
};

const displayTasks = async (req, res) => {
  const data = await pool.query(queries.displayAllTasks,[userId]);
  res.send(data.rows);
};

const deleteTask = async (req, res) => {
  const { task_id } = req.body;
  try {
    await pool.query(queries.deleteTask, [task_id]);
    res.status(204).send("Ok");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateReminder = async (req, res) => {
  const { reminder, task_id } = req.body;
  try {
    await pool.query(queries.updateReminder, [reminder, task_id]);
    res.status(204).send("ok");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
  userLogOut,
  //appPage,
  addTasks,
  displayTasks,
  deleteTask,
  UpdateReminder,
};
