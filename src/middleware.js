const session = require("express-session");
const { request, response } = require("express");

const sessionMiddleware = (req, res, next) => {
    console.log(req.session.id);
  if (req.session.id) return next()
  session({
    resave: false,
    secret: process.env.SESSION_SECRET,
    cookie: {},
    saveUninitialized: false,
  });
  next();
};
module.exports = sessionMiddleware;
