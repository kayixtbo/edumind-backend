let {dataSource} = require("../../dataSource")

async function fetchStudent(id) {

    try {
        let studentRepository = await dataSource // realizando a query
            .getRepository('Students')
            .findOne({where: { id: id}})
        
        return studentRepository
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {fetchStudent}