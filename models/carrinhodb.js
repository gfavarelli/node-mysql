const { DataTypes } = require('sequelize');
const db = require('./db');

const carrinho = db.define('carrinho', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    produtoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    produtoNome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    produtoPreco: {
        type: DataTypes.DECIMAL(7,2),
        allowNull: false
    }
});

carrinho.sync({alter:true});

module.exports = carrinho;