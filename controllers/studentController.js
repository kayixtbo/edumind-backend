const studentRepository = require('../repositories/studentRepository');

exports.createStudent = async (req, res) => {
    const { name, registration, id_school, id_responsible, id_class } = req.body;
    try {
        const newStudent = await studentRepository.createStudent({ name, registration, id_school, id_responsible, id_class });
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar aluno: ' + error.message });
    }
};

exports.getAllStudents = async (req, res) => {
    try {
        const students = await studentRepository.getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar alunos: ' + error.message });
    }
};

exports.getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await studentRepository.getStudentById(id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar aluno: ' + error.message });
    }
};

exports.updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, registration, id_school, id_responsible, id_class } = req.body;
    try {
        const updatedStudent = await studentRepository.updateStudent(id, { name, registration, id_school, id_responsible, id_class });
        if (updatedStudent) {
            res.status(200).json(updatedStudent);
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar aluno: ' + error.message });
    }
};

exports.deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await studentRepository.deleteStudent(id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir aluno: ' + error.message });
    }
};
