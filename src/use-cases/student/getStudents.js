let {dataSource} = require("../../dataSource")

async function getStudents(id_school) {
    let repositoryStudent = await dataSource // realizando a query
        .getRepository('Student')
        .createQueryBuilder('student')
        .where({id_school: id_school})
        .getMany()
    
    return repositoryStudent
}

module.exports = {getStudents}