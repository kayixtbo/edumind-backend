let {dataSource} = require("../../dataSource")

async function putStudent(data, id) {

    try {
        await dataSource 
            .getRepository('Students')
            .createQueryBuilder('students')
            .update()
            .set(data)
            .where("id = :id", {id: id})
            .execute()
            
            let updatedStudent = await dataSource
                .getRepository('Student')
                .findOne({ where: { id: id } });
        
            return updatedStudent
    } catch (error) {
        throw new Error(`Erro: ${error.message}`)
    }
        
}

module.exports = {putStudent}