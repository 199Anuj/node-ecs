import express from "express";
const app = express();

app.get("/random", (req, res) => {
  res.json({
    number: Math.floor(Math.random() * 1000),
  });
});

app.get("/", (req, res) => {
  res.send("ECS Fargate CI/CD Demo");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
