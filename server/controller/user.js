const db = require("../db/connection");
const bcrypt = require("bcrypt");

// Hash password and store user in the database
const addUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO `user` (username, password) VALUES (?, ?)";
    const data = [username, hashedPassword];

    db.query(sql, data, (err) => {
      if (err) {
        console.error("Database error:", err.message);
        return res
          .status(500)
          .json({ message: "Database query error. Please try again later." });
      }

      return res.status(201).json({ message: "User added successfully." });
    });
  } catch (error) {
    console.error("Error adding user:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Compare hashed password during login
const admin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required." });
    }

    const sql = "SELECT * FROM `user` WHERE username = ?";
    db.query(sql, [username], async (err, results) => {
      if (err) {
        console.error("Database query error:", err.message);
        return res.status(500).json({ message: "Server error" });
      }

      if (results.length === 0) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      for (user of results) {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
          return res.status(200).json({ message: "Login successful" });
        }
      }
      return res.status(401).json({ message: "Invalid username or password" });
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};


// ==================================== (show users api) ====================================

const getUser = (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json({ results });
  });
};

module.exports = {
  getUser,
  addUser,
  admin,
};
