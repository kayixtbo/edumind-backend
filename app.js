const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');

const port = 3000;
const app = express();

app.use(bodyParser.json());

// Usando as rotas
app.use('/api', indexRoutes);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`O servidor está em execução http://localhost:${port}`);
});