const express = require("express");
const router = express.Router();
const produtodb = require('./../models/produtodb');

router.post('/', async(req, res) => {
    try {
        await produtodb.create(req.body);
        return res.send({mensagem: "Produto cadastrado com sucesso"});
    } catch(err) {
        return res.status(500).send({mensagem: `Erro: ${err}`});
    }
});

module.exports = router;
