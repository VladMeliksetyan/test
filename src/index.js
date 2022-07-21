const cookieParser = require("cookie-parser");
const express = require("express");
const userRoutes = require("./routes");
const app = express();
require("dotenv").config();
const session = require("express-session");
const PORT = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(cookieParser());


app.use(session({
    resave:false,
    secret:process.env.SESSION_SECRET,
    cookie:{},
    saveUninitialized:false,
    cookie: { secure: true }

}))

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`)); 
