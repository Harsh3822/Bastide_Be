// index.js
const express = require('express');
const app = express();

app.use(express.static('public'));  // agar static frontend hai

app.get('/api/hello', (req, res) => {
  res.json({ msg: "Hello from Render!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
