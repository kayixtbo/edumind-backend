let {dataSource} = require("../../dataSource")

async function createFeedback(id_student, id_professional, text) {

    try {
        let feedbackRepository = dataSource.getRepository('Feedbacks')
    
        let feedback = await feedbackRepository.save({
            id_student: id_student,
            id_professional: id_professional,
            text: text
        })
    
        return feedback
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {createFeedback}