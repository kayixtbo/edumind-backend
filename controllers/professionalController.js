const professionalRepository = require('../repositories/professionalRepository');

exports.createProfessional = async (req, res) => {
    const { name, registration, address, occupation, birth } = req.body;
    try {
        const newProfessional = await professionalRepository.createProfessional({ name, registration, address, occupation, birth });
        res.status(201).json(newProfessional);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar profissional: ' + error.message });
    }
};

exports.getAllProfessionals = async (req, res) => {
    try {
        const professionals = await professionalRepository.getAllProfessionals();
        res.status(200).json(professionals);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar profissionais: ' + error.message });
    }
};

exports.getProfessionalById = async (req, res) => {
    const { id } = req.params;
    try {
        const professional = await professionalRepository.getProfessionalById(id);
        if (professional) {
            res.status(200).json(professional);
        } else {
            res.status(404).json({ error: 'Profissional não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar profissional: ' + error.message });
    }
};

exports.updateProfessional = async (req, res) => {
    const { id } = req.params;
    const { name, registration, address, occupation, birth } = req.body;
    try {
        const updatedProfessional = await professionalRepository.updateProfessional(id, { name, registration, address, occupation, birth });
        if (updatedProfessional) {
            res.status(200).json(updatedProfessional);
        } else {
            res.status(404).json({ error: 'Profissional não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar profissional: ' + error.message });
    }
};

exports.deleteProfessional = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await professionalRepository.deleteProfessional(id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Profissional não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir profissional: ' + error.message });
    }
};
