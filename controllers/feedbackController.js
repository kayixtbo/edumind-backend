const feedbackRepository = require('../repositories/feedbackRepository');

exports.createFeedback = async (req, res) => {
    const { text, id_professional, id_students } = req.body;
    try {
        const newFeedback = await feedbackRepository.createFeedback({ text, id_professional, id_students });
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar feedback: ' + error.message });
    }
};

exports.getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await feedbackRepository.getAllFeedbacks();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar feedbacks: ' + error.message });
    }
};

exports.getFeedbackById = async (req, res) => {
    const { id } = req.params;
    try {
        const feedback = await feedbackRepository.getFeedbackById(id);
        if (feedback) {
            res.status(200).json(feedback);
        } else {
            res.status(404).json({ error: 'Feedback não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar feedback: ' + error.message });
    }
};

exports.updateFeedback = async (req, res) => {
    const { id } = req.params;
    const { text, id_professional, id_students } = req.body;
    try {
        const updatedFeedback = await feedbackRepository.updateFeedback(id, { text, id_professional, id_students });
        if (updatedFeedback) {
            res.status(200).json(updatedFeedback);
        } else {
            res.status(404).json({ error: 'Feedback não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar feedback: ' + error.message });
    }
};

exports.deleteFeedback = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await feedbackRepository.deleteFeedback(id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Feedback não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir feedback: ' + error.message });
    }
};
