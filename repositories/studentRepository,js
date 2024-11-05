const Students = require("../models/student");

class StudentRepository {
    async createStudent(studentData) {
        try {
            const newStudent = await Students.create(studentData);
            return newStudent;
        } catch (error) {
            throw new Error('Erro ao criar aluno: ' + error.message);
        }
    }

    async getAllStudents() {
        try {
            const students = await Students.findAll();
            return students;
        } catch (error) {
            throw new Error('Erro ao listar alunos: ' + error.message);
        }
    }

    async getStudentById(id) {
        try {
            const student = await Students.findByPk(id);
            return student;
        } catch (error) {
            throw new Error('Erro ao buscar aluno: ' + error.message);
        }
    }

    async updateStudent(id, studentData) {
        try {
            const [updated] = await Students.update(studentData, { where: { id } });
            if (updated) {
                return await Students.findByPk(id);
            } else {
                return null;
            }
        } catch (error) {
            throw new Error('Erro ao atualizar aluno: ' + error.message);
        }
    }

    async deleteStudent(id) {
        try {
            const deleted = await Students.destroy({ where: { id } });
            return deleted;
        } catch (error) {
            throw new Error('Erro ao excluir aluno: ' + error.message);
        }
    }
}

module.exports = new StudentRepository();
