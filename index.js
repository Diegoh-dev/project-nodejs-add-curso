const express = require("express");

const app = express();

const port = 3001;

app.use(express.json());

const cursos = [];

app.get("/cursos", (req, res) => {
  return res.json(cursos);
});

app.post("/create/:newcurso", (req, res) => {
  const { newcurso } = req.params;

  cursos.push(newcurso);

  return res.status(201).json(newcurso);
});

app.put("/cursos/:index/:update", (req, res) => {
  const { index, update } = req.params;

  cursos[index] = update;

  return res.json(update);
});

app.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.status(204).json();
});

app.listen(port, () => {
  console.log("servidor rodando.");
});
