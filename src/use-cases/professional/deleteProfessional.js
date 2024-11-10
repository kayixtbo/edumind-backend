let {dataSource} = require("../../dataSource")
const Professional = require("../../entity/Professional")

async function deleteProfessional(id) {

    try {
        let deletedProfesional = dataSource
        .createQueryBuilder()
        .delete()
        .from(Professional)
        .where("id = :id", { id: id })
        .execute()
    
        return deletedProfesional
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {deleteProfessional}