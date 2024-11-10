let {dataSource} = require("../../dataSource")
const Students = require("../../entity/Students")

async function deleteSchool(id) {
    try {
        let deletedSchool = dataSource
        .createQueryBuilder()
        .delete()
        .from(Students)
        .where("id = :id", { id: id })
        .execute()
        
        return deletedSchool
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {deleteSchool}