let {dataSource} = require("../../dataSource")

async function fetchSchool(id) {

    try {
        let schoolRepository = await dataSource // realizando a query
            .getRepository('School')
            .findOne({where: { id: id}})
        
        return schoolRepository
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {fetchSchool}