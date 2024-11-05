const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_school: {
    type: DataTypes.UUID,
    allowNull: false,
  }
});

Class.associate = (models) => {
  // Relacionamento N:1 - Uma turma pertence a uma escola
  Class.belongsTo(models.School, {
    foreignKey: 'id_school',
    as: 'school',  // Nome do relacionamento
  });
};

module.exports = Class;