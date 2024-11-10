let {dataSource} = require("../../dataSource")
const School = require("../../entity/School")

async function deleteSchool(id) {

    try {
        let deletedSchool = dataSource
        .createQueryBuilder()
        .delete()
        .from(School)
        .where("id = :id", { id: id })
        .execute()
    
        return deletedSchool
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {deleteSchool}