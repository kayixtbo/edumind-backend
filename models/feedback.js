module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define('Feedback', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,  // Texto do feedback é obrigatório
      },
      id_professional: {
        type: DataTypes.UUID,
        allowNull: false,  // O profissional responsável pelo feedback deve ser informado
      },
      id_student: {
        type: DataTypes.UUID,
        allowNull: false,  // O aluno que recebe o feedback deve ser informado
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
  
    return Feedback;
  };
  