let {dataSource} = require("../../dataSource")

async function createFeedback(id_student, id_professional, text) {
    let feedbackRepository = dataSource.getRepository('Feedback')

    let feedback = await feedbackRepository.save({
        id_student: id_student,
        id_professional: id_professional,
        text: text
    })

    return feedback
}

module.exports = {createFeedback}