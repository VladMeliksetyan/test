const { Router } = require("express");
const {
  registerUser,
   loginUser,
  addTasks,
  displayTasks,
  deleteTask,
  UpdateReminder,
  userLogOut
} = require("./controllers");
const session = require("./middleware");



const app = Router();


 app.post("/register", registerUser);
 app.post("/login", loginUser);
 app.get("/logout", userLogOut);
app.post("/app",addTasks);
app.get("/tasks",displayTasks);
app.delete("/removeTask",deleteTask);
app.put("/updateReminder",UpdateReminder)

module.exports = app;
