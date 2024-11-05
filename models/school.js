const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const School = sequelize.define('School', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4, 
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

School.associate = (models) => {
  // Relacionamento 1:N - Uma escola tem várias turmas
  School.hasMany(models.Class, {
    foreignKey: 'id_school',
    as: 'classes',  // Nome do relacionamento
  });

  // Relacionamento 1:N - Uma escola tem vários alunos
  School.hasMany(models.Student, {
    foreignKey: 'id_school',
    as: 'students',
  });

  // Relacionamento N:N - Uma escola pode ter vários profissionais
  School.belongsToMany(models.Professional, {
    through: 'SchoolProfessional',  // Tabela de junção
    as: 'professionals',  // Nome do relacionamento
    foreignKey: 'id_school',
    otherKey: 'id_professional',
  });

  // Relacionamento N:N - Uma escola pode ter vários responsáveis
  School.belongsToMany(models.Responsible, {
    through: 'SchoolResponsible',  // Tabela de junção
    as: 'responsibles',  // Nome do relacionamento
    foreignKey: 'id_school',
    otherKey: 'id_responsible',
  });
};

module.exports = School;