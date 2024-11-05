const Class = require("../models/class");

class ClassRepository {
    async createClass(classData) {
        try {
            const newClass = await Class.create(classData);
            return newClass;
        } catch (error) {
            throw new Error('Erro ao criar classe: ' + error.message);
        }
    }

    async getAllClasses() {
        try {
            const classes = await Class.findAll();
            return classes;
        } catch (error) {
            throw new Error('Erro ao listar classes: ' + error.message);
        }
    }

    async getClassById(id) {
        try {
            const classObj = await Class.findByPk(id);
            return classObj;
        } catch (error) {
            throw new Error('Erro ao buscar classe: ' + error.message);
        }
    }

    async updateClass(id, classData) {
        try {
            const [updated] = await Class.update(classData, { where: { id } });
            if (updated) {
                return await Class.findByPk(id);
            } else {
                return null;
            }
        } catch (error) {
            throw new Error('Erro ao atualizar classe: ' + error.message);
        }
    }

    async deleteClass(id) {
        try {
            const deleted = await Class.destroy({ where: { id } });
            return deleted;
        } catch (error) {
            throw new Error('Erro ao excluir classe: ' + error.message);
        }
    }
}

module.exports = new ClassRepository();
