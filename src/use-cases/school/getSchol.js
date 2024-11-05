let {dataSource} = require("../../dataSource")

async function getSchool() {
    let schoolRepository = await dataSource // realizando a query
        .getRepository('School')
        .createQueryBuilder('school')
        .getMany()
    
    return schoolRepository
}

module.exports = {getSchool}