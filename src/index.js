const express = require("express");
const userRoutes = require("./routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
