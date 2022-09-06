const { DataTypes } = require('sequelize');
const db = require('./db');

const usuario = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    dataCriacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

//Criar a tabela
//usuario.sync();

//Se houver alguma alteração na tabela, força a alteração
//usuario.sync({alter:true});

module.exports = usuario;