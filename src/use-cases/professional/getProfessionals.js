let {dataSource} = require("../../dataSource")

async function getProfessionals() {

    try {
        let repositoryProfessional = await dataSource // realizando a query
            .getRepository('Professional')
            .createQueryBuilder('professional')
            .getMany()
        
        return repositoryProfessional
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {getProfessionals}