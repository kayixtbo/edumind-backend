const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Feedback = sequelize.define('Feedback', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
  id_professional: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  id_student: {
    type: DataTypes.UUID,
    allowNull: false,
  }
});

Feedback.associate = (models) => {
  // Relacionamento N:1 - O feedback é dado por um profissional
  Feedback.belongsTo(models.Professional, {
    foreignKey: 'id_professional',
    as: 'professional',
  });

  // Relacionamento N:1 - O feedback é para um aluno
  Feedback.belongsTo(models.Student, {
    foreignKey: 'id_student',
    as: 'student',
  });
};

module.exports = Feedback;