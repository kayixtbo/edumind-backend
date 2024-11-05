let {dataSource} = require("../../dataSource")

async function getProfessionals() {
    let repositoryProfessional = await dataSource // realizando a query
        .getRepository('Professional')
        .createQueryBuilder('professional')
        .getMany()
    
    return repositoryProfessional
}

module.exports = {getProfessionals}