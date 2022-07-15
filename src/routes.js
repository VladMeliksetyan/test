const { Router } = require("express");
const {
  diplayloginUserPage,
  registerUser,
  displayLogoutPage,
  displayRegisterPage,
  userLogOut,
  loginUser,
  appPage,
  addTasks,
} = require("./controllers");

const app = Router();

app.get("/register", displayRegisterPage);
app.post("/register", registerUser);
app.get("/login", diplayloginUserPage);
app.post("/login", loginUser);
app.get("/logout", displayLogoutPage);
app.post("/logout", userLogOut);
app.get("/app", appPage);
app.post("/app", addTasks);

module.exports = app;
