const express = require("express");
const router = express.Router();
const usuariodb = require('./../models/usuariodb');
const { encrypt, getSenhaDecrypt } = require('../utils/crypto');
const { validarJWT, gerarTokenJwt } = require('../utils/jwt');

router.post('/', async(req, res) => {
    try {
        const senhaEncrypt = encrypt(req.body.senha);
        req.body.senha = senhaEncrypt;
        await usuario.create(req.body);
        return res.send({mensagem:"Cadastro realizado com sucesso"});
    } catch (err) {
        return res.status(500).send({mensagem: `Erro: ${err}`});
    }
});

router.post('/login', async(req, res) => {
    try {
        const usuarioLogin = await usuariodb.findAll({where: {email: req.body.email}});
        console.log(usuarioLogin);
        if (usuarioLogin && usuarioLogin.length > 0) {
            if(req.body.senha === getSenhaDecrypt(usuarioLogin[0].senha)) {
                const retorno = {
                    id: usuarioLogin[0].id,
                    nome: usuarioLogin[0].nome,
                    email: usuarioLogin[0].email,
                    token: gerarTokenJwt(usuarioLogin[0].id)
                }
                return res.send(retorno);
            }
        }

        return res.status(404).send({mensagem:"Usuário não encontrado"});
    } catch (err) {
        return res.status(500).send({mensagem: `Erro: ${err}`});
    }
});

router.get("/:id", async (req,res) => {
    const usuarioPesquisa = await usuariodb.findAll({where: {id: req.params.id}});
    if (!usuarioPesquisa || usuarioPesquisa.length === 0) {
        return res.status(404).json({mensagem: "Usuário não encontrado"});
    } 
    return res.send(usuarioPesquisa);
});

router.put('/', async (req, res) => {
    await usuariodb.update(req.body, {where: {id: req.body.id}});
    return res.send({mensagem:"Cadastro alterado com sucesso"});
});

router.delete('/', async (req, res) => {
    await usuariodb.destroy({where: {id: req.body.id}});
    return res.send({mensagem: "Usuário removido com sucesso."});
});

module.exports = router;