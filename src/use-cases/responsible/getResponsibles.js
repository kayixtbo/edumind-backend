let {dataSource} = require("../../dataSource")

async function getResponsibles(id_school) {
    let responsibleRepository = await dataSource // realizando a query
        .getRepository('Responsible')
        .createQueryBuilder('responsible')
        .where({id_school: id_school})
        .getMany()
    
    return responsibleRepository
}

module.exports = {getResponsibles}