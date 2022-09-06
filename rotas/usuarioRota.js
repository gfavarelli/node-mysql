const express = require("express");
const router = express.Router();
const usuario = require('./../models/usuariodb');

router.post('/', async(req,res) => {
    try {
        await usuario.create(req.body);
        return res.send({mensagem:"Cadastro realizado com sucesso"});
    } catch (err) {
        return res.status(500).send({mensagem: `Erro: ${err}`});
    }
});

router.get("/:id", async (req,res) => {
    const usuarioPesquisa = await usuario.findAll({where: {id: req.params.id}});
    if (!usuarioPesquisa || usuarioPesquisa.length === 0) {
        return res.status(404).json({mensagem: "Usuário não encontrado"});
    } 
    return res.send(usuarioPesquisa);
});

router.put('/', async (req, res) => {
    await usuario.update(req.body, {where: {id: req.body.id}});
    return res.send({mensagem:"Cadastro alterado com sucesso"});
});

router.delete('/', async (req, res) => {
    await usuario.destroy({where: {id: req.body.id}});
    return res.send({mensagem: "Usuário removido com sucesso."});
});

module.exports = router;