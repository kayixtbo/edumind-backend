const responsibleRepository = require('../repositories/responsibleRepository');

exports.createResponsible = async (req, res) => {
    const { name, birth } = req.body;
    try {
        const newResponsible = await responsibleRepository.createResponsible({ name, birth });
        res.status(201).json(newResponsible);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar responsável: ' + error.message });
    }
};

exports.getAllResponsibles = async (req, res) => {
    try {
        const responsibles = await responsibleRepository.getAllResponsibles();
        res.status(200).json(responsibles);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar responsáveis: ' + error.message });
    }
};

exports.getResponsibleById = async (req, res) => {
    const { id } = req.params;
    try {
        const responsible = await responsibleRepository.getResponsibleById(id);
        if (responsible) {
            res.status(200).json(responsible);
        } else {
            res.status(404).json({ error: 'Responsável não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar responsável: ' + error.message });
    }
};

exports.updateResponsible = async (req, res) => {
    const { id } = req.params;
    const { name, birth } = req.body;
    try {
        const updatedResponsible = await responsibleRepository.updateResponsible(id, { name, birth });
        if (updatedResponsible) {
            res.status(200).json(updatedResponsible);
        } else {
            res.status(404).json({ error: 'Responsável não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar responsável: ' + error.message });
    }
};

exports.deleteResponsible = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await responsibleRepository.deleteResponsible(id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Responsável não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir responsável: ' + error.message });
    }
};
