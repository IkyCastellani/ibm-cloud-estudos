const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    ok: true,
    mensagem: "Meu primeiro app na IBM Cloud",
    data: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});