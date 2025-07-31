const express = require("express");
const router = express.Router();
const category = require("../controller/category"); 

router.route("/categories").get(category.getCategory); 

module.exports = router;  
