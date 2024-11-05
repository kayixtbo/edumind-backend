const Responsible = require("../models/responsible");

class ResponsibleRepository {
    async createResponsible(responsibleData) {
        try {
            const newResponsible = await Responsible.create(responsibleData);
            return newResponsible;
        } catch (error) {
            throw new Error('Erro ao criar responsável: ' + error.message);
        }
    }

    async getAllResponsibles() {
        try {
            const responsibles = await Responsible.findAll();
            return responsibles;
        } catch (error) {
            throw new Error('Erro ao listar responsáveis: ' + error.message);
        }
    }

    async getResponsibleById(id) {
        try {
            const responsible = await Responsible.findByPk(id);
            return responsible;
        } catch (error) {
            throw new Error('Erro ao buscar responsável: ' + error.message);
        }
    }

    async updateResponsible(id, responsibleData) {
        try {
            const [updated] = await Responsible.update(responsibleData, { where: { id } });
            if (updated) {
                return await Responsible.findByPk(id);
            } else {
                return null;
            }
        } catch (error) {
            throw new Error('Erro ao atualizar responsável: ' + error.message);
        }
    }

    async deleteResponsible(id) {
        try {
            const deleted = await Responsible.destroy({ where: { id } });
            return deleted;
        } catch (error) {
            throw new Error('Erro ao excluir responsável: ' + error.message);
        }
    }
}

module.exports = new ResponsibleRepository();
