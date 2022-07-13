const pool = require("./db");
const queries = require("./queries");
const { uuid } = require("uuidv4");

const getUsers = (req, res) => {
  pool.query(queries.getAllUsers, (error, result) => {
    if (error) throw error;
    res.status(200).send(result.rows);
  });
};

const getUSerById = (req, res) => {
  const id = req.params.id;
  pool.query(queries.getUSerById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addUser = (req, res) => {
  const { name } = req.body;
  id = uuid();
  pool.query(queries.addUser, [id, name], (error, result) => {
    if (error) throw error;
    res.status(201).send("User creatred succsessfuly");
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  pool.query(queries.deleteUser, [id], (error, result) => {
    res.send("user deleted!!");
  });
};
module.exports = {
  getUsers,
  getUSerById,
  addUser,
  deleteUser,
};
