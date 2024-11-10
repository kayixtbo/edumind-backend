let {dataSource} = require("../../dataSource")

async function putResponsible(data, id) {

    try {
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
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {putResponsible}