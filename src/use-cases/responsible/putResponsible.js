let {dataSource} = require("../../dataSource")

async function putResponsible(data, id) {
    await dataSource // realizando a query
        .getRepository('Responsible')
        .createQueryBuilder('responsible')
        .update()
        .set(data)
        .where("id = :id", {id: id})
        .execute()
        
    let updatedResponsible = await dataSource
        .getRepository('Responsible')
        .findOne({ where: { id: id } });

    return updatedResponsible
}

module.exports = {putResponsible}