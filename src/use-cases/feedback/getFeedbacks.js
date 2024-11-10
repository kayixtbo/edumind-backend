let {dataSource} = require("../../dataSource")

async function getFeedbacks(id_student) {

    try {
        let classRepository = await dataSource // realizando a query
            .getRepository('Feedback')
            .createQueryBuilder('feedbacks')
            .where({id_student: id_student})
            .getMany()
        
        return classRepository
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {getFeedbacks}