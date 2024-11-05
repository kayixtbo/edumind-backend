let {dataSource} = require("../../dataSource")

async function createSchool(name, cnpj, adress) {
    let schoolRepository = dataSource.getRepository('School')

    let school = await schoolRepository.save({
        name: name,
        cnpj: cnpj,
        adress: adress
    })

    return school
}

module.exports = {createSchool}