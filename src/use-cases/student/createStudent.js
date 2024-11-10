let {dataSource} = require("../../dataSource")

async function createStudent(name, registration, birth,id_school,id_responsible,id_class) {
    try {
        let studentRepository = dataSource.getRepository('Students')
    
        let student = await studentRepository.save({
            name: name,
            birth: birth,
            registration: registration,
            id_school: id_school,
            id_responsible: id_responsible,
            id_class: id_class
        })

        return student
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {createStudent}