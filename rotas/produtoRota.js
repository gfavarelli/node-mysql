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

router.get('/:id', async(req, res) => {
    try {
        const produto = await produtodb.findAll({where: {id: req.params.id}});
        if (!produto || produto.length === 0) {
            return res.status(404).send({mensagem: "Produto não encontrado"});
        }
        return res.send(produto);
    } catch(err) {
        return res.status(500).send({mensagem: `Erro: ${err}`});
    }
}); 

router.delete('/:id', async(req, res) => {
    try {
        await produtodb.destroy({where: {id: req.params.id}});
        return res.send({mensagem: "Produto deletado com sucesso"});
    } catch(err) {
        return res.status(500).send({mensagem: `Erro: ${err}`});
    }
});

module.exports = router;
