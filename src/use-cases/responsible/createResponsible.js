let {dataSource} = require("../../dataSource")

async function createResponsible(name, id_school, birth) {
    let responsibleRepository = dataSource.getRepository('School')

    let school = await responsibleRepository.save({
        name: name,
        id_school: id_school,
        birth: birth
    })

    return school
}

module.exports = {createResponsible}