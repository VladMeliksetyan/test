const express = require("express");
const userRoutes = require("/home/vladimir/Desktop/CRUD/src/routes.js");
const app = express();
const port = 3000;

app.use(express.json());
app.use(userRoutes);
app.listen(port, () => console.log(`app listening on port ${port}`));
