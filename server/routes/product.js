const express = require("express");
const router = express.Router();
const product = require("../controller/product");
const location = require("../middlewares/fileHandler");

router
  .route("/add-product")
  .post(location.single("product_image"), product.addProduct);

router.route("/get-product").get(product.getProduct);

router
  .route("/update-product/:id")
  .put(location.single("product_image"), product.updateProduct);
router.route("/delete-product/:id").delete(product.deleteProduct);
router.route("/category-product/:category").get(product.getProductByCategory);

module.exports = router;
