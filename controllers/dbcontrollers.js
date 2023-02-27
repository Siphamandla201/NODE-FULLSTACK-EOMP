const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const { Users, Products } = require("../models/dbmodels");

// |||||||||||||||||||||||||||||| -USERS ROUTER- |||||||||||||||||||||||||||||||||| \\

const user = new Users();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to life choices" });
});
router.post("/signup", bodyParser,(req, res) => {
  user.createUser(req, res);
});

router.get("/users/:username", (req, res) => {
  user.showUser(req, res);
});

router.get("/users", (req, res) => {
  user.showAllUsers(req, res);
});

router.delete("/users/:username", (req, res) => {
  user.deleteUser(req, res);
});

router.put("/users/:username",bodyParser, (req, res) => {
  user.updateUser(req, res);
});

const product = new Products();

module.exports = router;
