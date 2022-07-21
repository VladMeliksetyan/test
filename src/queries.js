const addUser =
  "INSERT INTO users (user_id,username,email,password) VALUES ($1,$2,$3,$4)";
const userLogin = "SELECT * FROM users WHERE email = $1";
const addSessionId = "update users set session = $1  where email = $2";
const addTasks = "insert into tasks (task_id,text,reminder,user_id) values ($1,$2,$3,$4) returning *"
//const addUserInTasks = "INSERT INTO tasks (user_id) VALUES ($1)";
const findUserBySession = "Select * from users where session = $1";
const displayAllTasks = "select * from tasks where user_id = $1";
const deleteTask = "delete from tasks where task_id = $1";
const updateReminder = "update tasks set reminder = $1 where task_id = $2"

module.exports = {
  addUser,
  userLogin,
  addTasks,
  //addUserInTasks,
  addSessionId,
  findUserBySession,
  displayAllTasks,
  deleteTask,
  updateReminder 
};
