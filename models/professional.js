module.exports = (sequelize, DataTypes) => {
    const Professional = sequelize.define('Professional', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,  // Nome do profissional é obrigatório
      },
      registration: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Registro do profissional é obrigatório
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,  // Endereço do profissional é obrigatório
      },
      occupation: {
        type: DataTypes.STRING,
        allowNull: false,  // Ocupação do profissional é obrigatória
      },
      birth: {
        type: DataTypes.DATE,
        allowNull: false,  // Data de nascimento é obrigatória
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
  
    return Professional;
  };  