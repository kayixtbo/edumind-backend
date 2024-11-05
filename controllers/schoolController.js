const schoolRepository = require('../repositories/schoolRepository');

exports.createSchool = async (req, res) => {
    const { cnpj, name, address } = req.body;
    try {
        const newSchool = await schoolRepository.createSchool({ cnpj, name, address });
        res.status(201).json(newSchool);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar escola: ' + error.message });
    }
};

exports.getAllSchools = async (req, res) => {
    try {
        const schools = await schoolRepository.getAllSchools();
        res.status(200).json(schools);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar escolas: ' + error.message });
    }
};

exports.getSchoolById = async (req, res) => {
    const { id } = req.params;
    try {
        const school = await schoolRepository.getSchoolById(id);
        if (school) {
            res.status(200).json(school);
        } else {
            res.status(404).json({ error: 'Escola não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar escola: ' + error.message });
    }
};

exports.updateSchool = async (req, res) => {
    const { id } = req.params;
    const { cnpj, name, address } = req.body;
    try {
        const updatedSchool = await schoolRepository.updateSchool(id, { cnpj, name, address });
        if (updatedSchool) {
            res.status(200).json(updatedSchool);
        } else {
            res.status(404).json({ error: 'Escola não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar escola: ' + error.message });
    }
};

exports.deleteSchool = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await schoolRepository.deleteSchool(id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Escola não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir escola: ' + error.message });
    }
};