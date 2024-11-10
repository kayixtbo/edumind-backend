let {dataSource} = require("../../dataSource")
const Responsible = require("../../entity/Responsible")

async function deleteResponsible(id) {

    try {
        let deletedResponsible = dataSource
        .createQueryBuilder()
        .delete()
        .from(Responsible)
        .where("id = :id", { id: id })
        .execute()
    
        return deletedResponsible
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {deleteResponsible}