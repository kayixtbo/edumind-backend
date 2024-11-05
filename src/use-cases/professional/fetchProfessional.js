let {dataSource} = require("../../dataSource")

async function fetchProfessional(id) {
    let professionalRepository = await dataSource // realizando a query
        .getRepository('Professional')
        .findOne({where: { id: id}})
    
    return professionalRepository
}

module.exports = {fetchProfessional}