let {dataSource} = require("../../dataSource")

async function createStudent(name, registration, birth,id_school,id_responsible,id_class) {
    let studentRepository = dataSource.getRepository('Student')

    let student = await studentRepository.save({
        name: name,
        birth: birth,
        registration: registration,
        id_school: id_school,
        id_responsible: id_responsible,
        id_class: id_class
    })

    return student
}

module.exports = {createStudent}