module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,  // Nome do aluno é obrigatório
      },
      registration: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Matrícula do aluno é obrigatória
      },
      id_school: {
        type: DataTypes.UUID,
        allowNull: false,  // A escola do aluno deve ser informada
      },
      id_responsible: {
        type: DataTypes.UUID,
        allowNull: false,  // O responsável pelo aluno deve ser informado
      },
      id_class: {
        type: DataTypes.UUID,
        allowNull: false,  // A turma do aluno deve ser informada
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
  
    return Student;
  };
  