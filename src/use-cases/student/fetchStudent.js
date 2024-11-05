let {dataSource} = require("../../dataSource")

async function fetchStudent(id) {
    let studentRepository = await dataSource // realizando a query
        .getRepository('Student')
        .findOne({where: { id: id}})
    
    return studentRepository
}

module.exports = {fetchStudent}