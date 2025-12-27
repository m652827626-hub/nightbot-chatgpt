import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Nightbot ChatGPT server çalışıyor 🚀");
});

app.get("/ask", async (req, res) => {
  const question = req.query.q;
  if (!question) {
    return res.send("Soru yok");
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }]
      })
    });

    const data = await response.json();
    res.send(data.choices[0].message.content);
  } catch (err) {
    res.send("Sunucu hatası");
  }
});

app.listen(PORT, () => {
  console.log("Server başladı:", PORT);
});
