const { create_UUID } = require("/home/vladimir/Desktop/CRUD/helpers.js");
const {
  addData,
  getAllUsers,
} = require("/home/vladimir/Desktop/CRUD/src/controllers.js");

module.exports = function (app) {
  app.get("/users", (req, res) => {
    res.status(200);
    res.send(getAllUsers());
  });

  app.get("/users/get/:id", (req, res) => {
    let user = users.find((element) => req.params.id == element.id);
    if (user) {
      res.status(200);
      res.send(user);
    } else {
      res.status(404);
      res.send("user not found!");
    }
  });

  app.post("/users/post", (req, res) => {
    res.status(200);
    let userId = create_UUID();
    res.send("created user");
    req.body.id = userId;
    
  });

  app.delete("/users/delete/:id", (req, res) => {
    let user = users.findIndex((element) => req.params.id == element.id);
    if (user) {
      users.splice(user, 1);
      res.send("user deleted!");
    } else {
      res.status(404);
      res.send("user not found!");
    }
  });
}
