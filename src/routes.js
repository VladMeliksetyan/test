const { Router } = require("express");
const {
  registerUser,
  loginUser,
  addTasks,
  displayTasks,
  deleteTask,
  UpdateReminder,
  userLogOut,
} = require("./controllers");
const sessionMiddleware = require("./middleware");
const session = require("./middleware");

const app = Router();

app.post("/register", registerUser);
app.post("/login", loginUser);
app.get("/logout", sessionMiddleware, userLogOut);
app.post("/app", sessionMiddleware , addTasks);
app.get("/tasks", sessionMiddleware, displayTasks);
app.delete("/removeTask", sessionMiddleware, deleteTask);
app.put("/updateReminder", sessionMiddleware, UpdateReminder);

module.exports = app;
