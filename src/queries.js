const addUser =
  "INSERT INTO users (id,name,email,password) VALUES ($1,$2,$3,$4)";
const deleteUser = "DELETE FROM users WHERE id = $1";
const userLogin = "SELECT * FROM users WHERE email = $1";
const addTasks =
  "update tasks set taskname = $1, task1 = $2, task2 = $3, task3 = $4 where id = $5";
const addUserInTasks = "INSERT INTO tasks (id) VALUES ($1)";

module.exports = {
  addUser,
  deleteUser,
  userLogin,
  addTasks,
  addUserInTasks,
};
