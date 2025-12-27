const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server çalışıyor 🚀");
});

app.get("/ask", (req, res) => {
  const q = req.query.q || "soru yok";
  res.send("TEST OK: " + q);
});

app.listen(PORT, () => {
  console.log("Server başladı:", PORT);
});
