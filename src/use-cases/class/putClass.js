let {dataSource} = require("../../dataSource")

async function putClass(data, id) {
    await dataSource // realizando a query
        .getRepository('Class')
        .createQueryBuilder('class')
        .update()
        .set(data)
        .where("id = :id", {id: id})
        .execute()
        
    let classRepository = await dataSource
        .getRepository('Class')
        .findOne({ where: { id: id } });

    return classRepository
}

module.exports = {putClass}