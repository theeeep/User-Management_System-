const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

/*
    @desciption Root/Home Route
    @method GET/Route
*/
route.get("/", services.homeRoutes);
// route.get("/", (req, res) => {
//   res.render("index");
// });

/*
    @desciption add users
    @method GET/add-user
*/
route.get("/add-user", services.add_user);
// route.get("/add-user", (req, res) => {
//   res.render("add_user");
// });

/*
    @desciption update user
    @method GET/update-user
*/
route.get("/update-user", services.update_user);
// route.get("/update-user", (req, res) => {
//   res.render("update_user");
// });

//API
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
