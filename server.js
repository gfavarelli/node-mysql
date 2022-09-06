const express = require("express");
const http = require("http");
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const usuarioRota = require('./rotas/usuarioRota');
const produtoRota = require('./rotas/produtoRota');

app.use(bodyParser.json()); 
app.use('/api/usuario', usuarioRota);
app.use('/api/produto', produtoRota);
server.listen(4000, () => console.log("Servidor rodando"))