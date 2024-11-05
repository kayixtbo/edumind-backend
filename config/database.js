const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: "../edumind_db.sqlite"
});

// Carregar os modelos
sequelize.School = require('../models/school')(sequelize, DataTypes);
sequelize.Class = require('../models/class')(sequelize, DataTypes);
sequelize.Student = require('../models/student')(sequelize, DataTypes);
sequelize.Professional = require('../models/professional')(sequelize, DataTypes);
sequelize.Responsible = require('../models/responsible')(sequelize, DataTypes);
sequelize.Feedback = require('../models/feedback')(sequelize, DataTypes);

// Sincronizando os modelos com o banco de dados
sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch((err) => {
    console.error('Error ao tentar sincronizar o banco de dados: ', err);
  });

module.exports = sequelize;