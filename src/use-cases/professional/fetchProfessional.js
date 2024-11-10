let {dataSource} = require("../../dataSource")

async function fetchProfessional(id) {

    try {
        let professionalRepository = await dataSource // realizando a query
            .getRepository('Professional')
            .findOne({where: { id: id}})
        
        return professionalRepository
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {fetchProfessional}