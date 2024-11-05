const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Professional = sequelize.define('Professional', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  registration: {
    type: DataTypes.INTEGER,
    allowNull: false, 
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  birth: {
    type: DataTypes.DATE,
    allowNull: false, 
  }
});

Professional.associate = (models) => {
  // Relacionamento N:N - O profissional pode trabalhar em várias escolas
  Professional.belongsToMany(models.School, {
    through: 'SchoolProfessional',  // Tabela de junção
    as: 'schools',  // Nome do relacionamento
    foreignKey: 'id_professional',
    otherKey: 'id_school',
  });
};

module.exports = Professional;