let {dataSource} = require("../../dataSource")

async function getFeedbacks(id_student) {
    let classRepository = await dataSource // realizando a query
        .getRepository('Feedback')
        .createQueryBuilder('feedback')
        .where({id_student: id_student})
        .getMany()
    
    return classRepository
}

module.exports = {getFeedbacks}