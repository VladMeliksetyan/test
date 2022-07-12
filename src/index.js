const express = require("express");
const app = express();
require("/home/vladimir/Desktop/CRUD/src/routes.js")(app);
const PORT = 3001;


app.use(express.json());
app.listen(PORT, () =>
  console.log(`App is running on http//:localhost:${PORT}`)
);
