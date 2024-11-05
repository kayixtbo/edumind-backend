let {dataSource} = require("../../dataSource")

async function fetchResponsible(id) {
    let responsibleRepository = await dataSource // realizando a query
        .getRepository('Responsible')
        .findOne({where: { id: id}})
    
    return responsibleRepository
}

module.exports = {fetchResponsible}