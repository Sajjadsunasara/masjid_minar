const db = require("../db/connection");

// ==================================== (Add data api) ====================================

const addProduct = (req, res) => {
  const { product_title, category_id, prodct_description, product_price } =
    req.body;
  const image = req.file ? req.file.filename : null;
  const sql =
    "INSERT INTO `product` (product_title, category_id, product_image, prodct_description, product_price ) VALUES (?, ?, ?, ?, ?)";
  const data = [
    product_title,
    category_id,
    image,
    prodct_description,
    product_price,
  ];

  db.query(sql, data, (err) => {
    if (err) {
      console.error("Database error", err.message);
      return res
        .status(500)
        .json({ error: "Database query error. Please try again later." });
    }
    return res.status(201).json({ message: "Product added successfully." });
  });
};

// ==================================== (Show data api) ====================================

const getProduct = (req, res) => {
  const sql = "SELECT * FROM product";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    return res.status(200).json({ results });
  });
};

// ==================================== (Update data api) ====================================

const updateProduct = (req, res) => {
  const productId = req.params.id;
  const { product_title, prodct_description, product_price } = req.body;
  const image = req.file ? req.file.filename : req.body.product_image;
  const sql = `UPDATE product SET product_title = ?, product_image = ?, prodct_description = ?, product_price = ? WHERE id = ?`;

  const data = [
    product_title,
    image,
    prodct_description,
    product_price,
    productId,
  ];

  db.query(sql, data, (err) => {
    if (err) {
      console.error("Error updating product:", err);
      return res.status(500).json({ message: "Failed to update product." });
    }
    return res.status(200).json({ message: "Product updated successfully!" });
  });
};

// ==================================== (Delete data api) ====================================

const deleteProduct = (req, res) => {
  const productId = req.params.id;
  const sql = "DELETE FROM product WHERE id = ?";
  db.query(sql, [productId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    return res.json({ results });
  });
};

const getProductByCategory = (req, res) => {
  const { category } = req.params;
  const sql = "SELECT * FROM product WHERE category_id = ? ";

  db.query(sql, [category], (err, results) => {
    if (err) {
      console.error("Error fetching category products:", err);
      return res.status(500).json({ error: "Database query error" });
    }
    return res.status(200).json({ results });
  });
};

module.exports = {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
};
