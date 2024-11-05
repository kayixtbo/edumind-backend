const { Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
});

// Sincronizando os modelos com o banco de dados
sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch((err) => {
    console.error('Error ao tentar sincronizar o banco de dados: ', err);
  });

module.exports = sequelize;