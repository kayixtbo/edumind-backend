let {dataSource} = require("../../dataSource")

async function getResponsibles() {

    try {
        let responsibleRepository = await dataSource // realizando a query
            .getRepository('Responsible')
            .createQueryBuilder('responsible')
            .getMany()
        
        return responsibleRepository
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {getResponsibles}