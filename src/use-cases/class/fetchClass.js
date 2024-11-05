let {dataSource} = require("../../dataSource")

async function fetchClass(id) {
    let classRepository = await dataSource // realizando a query
        .getRepository('Class')
        .findOne({where: { id: id}})
    
    return classRepository
}

module.exports = {fetchClass}