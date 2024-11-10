let {dataSource} = require("../../dataSource")

async function putSchool(data, id) {

    try {
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
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {putSchool}