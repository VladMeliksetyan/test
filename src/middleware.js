const session = require("express-session");

const sessionMiddleware = (req, res, next) => {
  console.log("session: ", req.session);
  if (!req?.session?.cookie.email) return res.status(403).send("Unauthorized")
  session({
    resave: false,
    secret: process.env.SESSION_SECRET,
    cookie: {},
    saveUninitialized: false,
  });
  next();
}; 
module.exports = sessionMiddleware;
