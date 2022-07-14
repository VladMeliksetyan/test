const addUser = `INSERT INTO users (id,name,email,password) VALUES ($1,$2,$3,$4)`;
const deleteUser = "DELETE FROM users WHERE id = $1";
const userLogin = "SELECT * FROM users WHERE email = $1";

module.exports = {
  addUser,
  deleteUser,
  userLogin,
};
