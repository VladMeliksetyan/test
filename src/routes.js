const { Router } = require("express");
const controller = require("./controllers");
const { addUser, deleteUser } = require("./queries");

const app = Router();

app.get("/", controller.getUsers);
app.get("/:id", controller.getUSerById);
app.post("/", controller.addUser);
app.delete("/:id", controller.deleteUser);

module.exports = app;
