const { Router } = require("express");
const controller = require("./controllers");

const app = Router();

app.get("/register", controller.displayRegisterPage);
app.post("/register", controller.registerUser);
app.get("/login", controller.diplayloginUserPage);
app.post("/login", controller.loginUser);

module.exports = app;
