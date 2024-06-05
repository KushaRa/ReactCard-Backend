const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const data_product = require("./data");

app.use(cors()); // Allow requests from any origin

app.get("/displayData", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // Set the allowed origin
  res.json({ data_product });
});

app.get("/displayData", (req, res) => {
  res.json({ data_product });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
