let {dataSource} = require("../../dataSource")

async function putProfessional(data, id) {
    await dataSource // realizando a query
        .getRepository('Professional')
        .createQueryBuilder('professional')
        .update()
        .set(data)
        .where("id = :id", {id: id})
        .execute()
        
    let updatedProfessioal = await dataSource
        .getRepository('Professional')
        .findOne({ where: { id: id } });

    return updatedProfessioal
}

module.exports = {putProfessional}