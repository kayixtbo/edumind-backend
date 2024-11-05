const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Student = sequelize.define('Student', {
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
  id_school: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  id_responsible: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  id_class: {
    type: DataTypes.UUID,
    allowNull: false,
  }
});

Student.associate = (models) => {
  // Relacionamento N:1 - O aluno pertence a uma escola
  Student.belongsTo(models.School, {
    foreignKey: 'id_school',
    as: 'school',
  });

  // Relacionamento N:1 - O aluno tem um responsável
  Student.belongsTo(models.Responsible, {
    foreignKey: 'id_responsible',
    as: 'responsible',
  });

  // Relacionamento N:1 - O aluno pertence a uma turma
  Student.belongsTo(models.Class, {
    foreignKey: 'id_class',
    as: 'class',
  });
};

module.exports = Student;