const { DataTypes } = require('sequelize');
const db = require('./db');

const produto = db.define('produto', {
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
    preco: {
        type: DataTypes.DECIMAL(7,2),
        allowNull: false
    },
    precoPromocao: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    }
});

//produto.sync();
//produto.sync({alter:true});

module.exports = produto;