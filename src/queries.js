const getAllUsers = `SELECT * FROM users`;
const addUser = `INSERT INTO users (id,name) VALUES ($1,$2)`;
const getUSerById = "SELECT * FROM users WHERE id = $1";
const deleteUser = "DELETE FROM users WHERE id = $1";

module.exports = {
  getAllUsers,
  addUser,
  getUSerById,
  deleteUser,
};
