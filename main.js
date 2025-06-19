const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 10000;

// Serve static files
app.use(express.static(path.join(__dirname, "dist")));

// Route fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
