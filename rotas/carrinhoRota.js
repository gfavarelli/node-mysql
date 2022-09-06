const express = require("express");
const router = express.Router();
const carrinhodb = require('./../models/carrinhodb');

router.post('/', async(req, res) => {
    try {
        await carrinhodb.create(req.body);
        return res.send({mensagem: "Produto adicionado no carrinho com sucesso"});
    } catch(err) {
        return res.status(500).send({mensagem: `Erro: ${err}`});
    }
});

router.get('/:usuarioId', async(req, res) => {
    try {
        const carrinho = await carrinhodb.findAll({where: {usuarioId: req.params.usuarioId}});
        if (!carrinho || carrinho.length === 0) {
            return res.status(404).send({mensagem: "Carrinho vázio"});
        }  
        return res.send(carrinho);
    } catch(err) {
        return res.status(500).send({mensagem: `Erro: ${err}`});
    }
}); 

router.delete('/:id', async(req, res) => {
    try {
        await carrinhodb.destroy({where: {id: req.params.id}});
        return res.send({mensagem: "Produto deletado com sucesso"});
    } catch(err) {
        return res.status(500).send({mensagem: `Erro: ${err}`});
    }
});

module.exports = router;
