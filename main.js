const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 10000;

// Serve static files (if frontend exists)
app.use(express.static(path.join(__dirname, "public"))); // change if folder is 'dist' or 'build'

// Route fallback (for SPAs)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); // or dist/index.html
});

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
