const School = require("../models/school");

class SchoolRepository {
  async createSchool(schoolData) {
      try {
          const newSchool = await School.create(schoolData);
          return newSchool;
      } catch (error) {
          throw new Error('Erro ao criar escola: ' + error.message);
      }
  }

  async getAllSchools() {
      try {
          const schools = await School.findAll();
          return schools;
      } catch (error) {
          throw new Error('Erro ao listar escolas: ' + error.message);
      }
  }

  async getSchoolById(id) {
      try {
          const school = await School.findByPk(id);
          return school;
      } catch (error) {
          throw new Error('Erro ao buscar escola: ' + error.message);
      }
  }

  async updateSchool(id, schoolData) {
      try {
          const [updated] = await School.update(schoolData, {
              where: { id },
          });
          if (updated) {
              return await School.findByPk(id);
          } else {
              return null;
          }
      } catch (error) {
          throw new Error('Erro ao atualizar escola: ' + error.message);
      }
  }

  async deleteSchool(id) {
      try {
          const deleted = await School.destroy({ where: { id } });
          return deleted;
      } catch (error) {
          throw new Error('Erro ao excluir escola: ' + error.message);
      }
  }
}

module.exports = new SchoolRepository();