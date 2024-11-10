let {dataSource} = require("../../dataSource")

async function fetchClass(id) {
    try {
        let classRepository = await dataSource // realizando a query
            .getRepository('Class')
            .findOne({where: { id: id}})
        
        return classRepository
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {fetchClass}