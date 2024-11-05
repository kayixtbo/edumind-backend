let {dataSource} = require("../../dataSource")

async function getResponsibles() {
    let responsibleRepository = await dataSource // realizando a query
        .getRepository('Responsible')
        .createQueryBuilder('responsible')
        .getMany()
    
    return responsibleRepository
}

module.exports = {getResponsibles}