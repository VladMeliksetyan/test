const express = require("express");
const userRoutes = require("./routes");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);
app.listen(port, () => console.log(`app listening on port ${port}`));
