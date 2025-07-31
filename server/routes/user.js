const express = require("express");
const router = express.Router();
const users = require("../controller/user");

router.route("/users").get(users.getUser);
router.route("/addusers").post(users.addUser);
router.route("/checkusers").post(users.admin);

module.exports = router;
