let {dataSource} = require("../../dataSource")

async function fetchSchool(id) {
    let schoolRepository = await dataSource // realizando a query
        .getRepository('School')
        .findOne({where: { id: id}})
    
    return schoolRepository
}

module.exports = {fetchSchool}