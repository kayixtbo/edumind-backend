const Feedbacks = require("../models/feedback");

class FeedbackRepository {
    async createFeedback(feedbackData) {
        try {
            const newFeedback = await Feedbacks.create(feedbackData);
            return newFeedback;
        } catch (error) {
            throw new Error('Erro ao criar feedback: ' + error.message);
        }
    }

    async getAllFeedbacks() {
        try {
            const feedbacks = await Feedbacks.findAll();
            return feedbacks;
        } catch (error) {
            throw new Error('Erro ao listar feedbacks: ' + error.message);
        }
    }

    async getFeedbackById(id) {
        try {
            const feedback = await Feedbacks.findByPk(id);
            return feedback;
        } catch (error) {
            throw new Error('Erro ao buscar feedback: ' + error.message);
        }
    }

    async updateFeedback(id, feedbackData) {
        try {
            const [updated] = await Feedbacks.update(feedbackData, { where: { id } });
            if (updated) {
                return await Feedbacks.findByPk(id);
            } else {
                return null;
            }
        } catch (error) {
            throw new Error('Erro ao atualizar feedback: ' + error.message);
        }
    }

    async deleteFeedback(id) {
        try {
            const deleted = await Feedbacks.destroy({ where: { id } });
            return deleted;
        } catch (error) {
            throw new Error('Erro ao excluir feedback: ' + error.message);
        }
    }
}

module.exports = new FeedbackRepository();
