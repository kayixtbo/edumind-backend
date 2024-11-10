let {dataSource} = require("../../dataSource")
const Class = require("../../entity/Class")

async function deleteClass(id,) {
    try {
        let deletedClass = dataSource
        .createQueryBuilder()
        .delete()
        .from(Class)
        .where("id = :id", { id: id })
        .execute()
    
        return deletedClass
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {deleteClass}