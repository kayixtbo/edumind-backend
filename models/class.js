module.exports = (sequelize, DataTypes) => {
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
        allowNull: false,  // A turma deve estar associada a uma escola
      }
    });
  
    Class.associate = (models) => {
      // Relacionamento N:1 - Uma turma pertence a uma escola
      Class.belongsTo(models.School, {
        foreignKey: 'id_school',
        as: 'school',  // Nome do relacionamento
      });
    };
  
    return Class;
  };
  