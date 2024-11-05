let {dataSource} = require("../../dataSource")

async function putSchool(data, id) {
    await dataSource // realizando a query
        .getRepository('School')
        .createQueryBuilder('school')
        .update()
        .set(data)
        .where("id = :id", {id: id})
        .execute()
        
    let updatedSchool = await dataSource
        .getRepository('School')
        .findOne({ where: { id: id } });

    return updatedSchool
}

module.exports = {putSchool}