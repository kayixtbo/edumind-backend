let {dataSource} = require("../../dataSource")

async function putStudent(data, id) {
    await dataSource // realizando a query
        .getRepository('Student')
        .createQueryBuilder('student')
        .update()
        .set(data)
        .where("id = :id", {id: id})
        .execute()
        
    let updatedStudent = await dataSource
        .getRepository('Student')
        .findOne({ where: { id: id } });

    return updatedStudent
}

module.exports = {putStudent}