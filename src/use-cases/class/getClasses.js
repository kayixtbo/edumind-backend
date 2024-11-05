let {dataSource} = require("../../dataSource")

async function getClasses(id_school) {
    let classRepository = await dataSource // realizando a query
        .getRepository('Class')
        .createQueryBuilder('class')
        .where({id_school: id_school})
        .getMany()
    
    return classRepository
}

module.exports = {getClasses}