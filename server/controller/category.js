const db = require("../db/connection");

const getCategory = (req, res) => {
  const sql = "SELECT * FROM category";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json( results );
  });
};

module.exports = { getCategory };
