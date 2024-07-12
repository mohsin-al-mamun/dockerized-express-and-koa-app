const express = require("express");
const cors = require("cors");

const app = express();

// Use cors middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Express with Docker!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
