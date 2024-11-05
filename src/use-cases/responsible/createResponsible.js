let {dataSource} = require("../../dataSource")

async function createResponsible(name, id_school, birth) {
    let responsibleRepository = dataSource.getRepository('Responsible')

    let responsible = await responsibleRepository.save({
        name: name,
        id_school: id_school,
        birth: birth
    })

    return responsible
}

module.exports = {createResponsible}