let {dataSource} = require("../../dataSource")

async function getStudents(id_school) {

    try {
        let repositoryStudent = await dataSource // realizando a query
            .getRepository('Students')
            .createQueryBuilder('students')
            .where({id_school: id_school})
            .getMany()
        
        return repositoryStudent
        
    } catch (error) {
        throw new Error(`Erro: ${error.message}`)
    }
}

module.exports = {getStudents}