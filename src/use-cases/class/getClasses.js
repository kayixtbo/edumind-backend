let {dataSource} = require("../../dataSource")

async function getClasses(id_school) {

    try {
        let classRepository = await dataSource // realizando a query
            .getRepository('Class')
            .createQueryBuilder('class')
            .where({id_school: id_school})
            .getMany()
        
        return classRepository
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {getClasses}