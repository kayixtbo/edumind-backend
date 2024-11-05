module.exports = (sequelize, DataTypes) => {
    const Responsible = sequelize.define('Responsible', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,  // Nome do responsável é obrigatório
      },
      birth: {
        type: DataTypes.DATE,
        allowNull: false,  // Data de nascimento do responsável é obrigatória
      }
    });
  
    Responsible.associate = (models) => {
      // Relacionamento N:N - O responsável pode estar associado a várias escolas
      Responsible.belongsToMany(models.School, {
        through: 'SchoolResponsible',  // Tabela de junção
        as: 'schools',  // Nome do relacionamento
        foreignKey: 'id_responsible',
        otherKey: 'id_school',
      });
    };
  
    return Responsible;
  };
  