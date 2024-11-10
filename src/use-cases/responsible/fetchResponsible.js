let {dataSource} = require("../../dataSource")

async function fetchResponsible(id) {

    try {
        let responsibleRepository = await dataSource // realizando a query
        .getRepository('Responsible')
        .findOne({where: { id: id}})
        
        return responsibleRepository
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {fetchResponsible}