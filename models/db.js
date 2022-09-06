const { Sequelize } = require('sequelize');

//Conexão com o MYSQL
const sequelize = new Sequelize('vendasapi_test', 'admin_vendas', 'admin123', {
  host: 'db4free.net',
  dialect: 'mysql'
});

//Status da Conexão 
sequelize.authenticate().then(() => {
    console.log('Conexão com MYSQL realizada com sucesso');
}).catch((err) => {
    console.log('Falha na conexão com MYSQL ' + err);
});

module.exports = sequelize;