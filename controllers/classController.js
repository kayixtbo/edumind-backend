const classRepository = require('../repositories/classRepository');

exports.createClass = async (req, res) => {
    const { name, id_school } = req.body;
    try {
        const newClass = await classRepository.createClass({ name, id_school });
        res.status(201).json(newClass);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar classe: ' + error.message });
    }
};

exports.getAllClasses = async (req, res) => {
    try {
        const classes = await classRepository.getAllClasses();
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar classes: ' + error.message });
    }
};

exports.getClassById = async (req, res) => {
    const { id } = req.params;
    try {
        const classObj = await classRepository.getClassById(id);
        if (classObj) {
            res.status(200).json(classObj);
        } else {
            res.status(404).json({ error: 'Classe não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar classe: ' + error.message });
    }
};

exports.updateClass = async (req, res) => {
    const { id } = req.params;
    const { name, id_school } = req.body;
    try {
        const updatedClass = await classRepository.updateClass(id, { name, id_school });
        if (updatedClass) {
            res.status(200).json(updatedClass);
        } else {
            res.status(404).json({ error: 'Classe não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar classe: ' + error.message });
    }
};

exports.deleteClass = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await classRepository.deleteClass(id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Classe não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir classe: ' + error.message });
    }
};
