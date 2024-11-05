const Professional = require("../models/professional");

class ProfessionalRepository {
    async createProfessional(professionalData) {
        try {
            const newProfessional = await Professional.create(professionalData);
            return newProfessional;
        } catch (error) {
            throw new Error('Erro ao criar profissional: ' + error.message);
        }
    }

    async getAllProfessionals() {
        try {
            const professionals = await Professional.findAll();
            return professionals;
        } catch (error) {
            throw new Error('Erro ao listar profissionais: ' + error.message);
        }
    }

    async getProfessionalById(id) {
        try {
            const professional = await Professional.findByPk(id);
            return professional;
        } catch (error) {
            throw new Error('Erro ao buscar profissional: ' + error.message);
        }
    }

    async updateProfessional(id, professionalData) {
        try {
            const [updated] = await Professional.update(professionalData, { where: { id } });
            if (updated) {
                return await Professional.findByPk(id);
            } else {
                return null;
            }
        } catch (error) {
            throw new Error('Erro ao atualizar profissional: ' + error.message);
        }
    }

    async deleteProfessional(id) {
        try {
            const deleted = await Professional.destroy({ where: { id } });
            return deleted;
        } catch (error) {
            throw new Error('Erro ao excluir profissional: ' + error.message);
        }
    }
}

module.exports = new ProfessionalRepository();
