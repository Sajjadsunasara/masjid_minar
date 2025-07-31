const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const db = require("./db/connection");
const users = require("./routes/user");
const category = require("./routes/category");
const product = require("./routes/product");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use("/", users);
app.use("/", category);
app.use("/", product);

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  app.listen(port, () => {
    console.log(`connected!! Server is running on http://localhost:${port}`);
  });
});
