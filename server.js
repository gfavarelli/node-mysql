const express = require("express");
const http = require("http");
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const usuarioRota = require('./rotas/usuarioRota');
const produtoRota = require('./rotas/produtoRota');
const carrinhoRota = require('./rotas/carrinhoRota');

app.use(bodyParser.json()); 
app.use('/api/usuario', usuarioRota);
app.use('/api/produto', produtoRota);
app.use('/api/carrinho', carrinhoRota);
server.listen(4000, () => console.log("Servidor rodando"))