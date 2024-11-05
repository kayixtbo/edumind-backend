let {dataSource} = require("../../dataSource")

async function createSchool(name, cnpj, address) {
    let schoolRepository = dataSource.getRepository('School')

    let school = await schoolRepository.save({
        name: name,
        cnpj: cnpj,
        address: address
    })

    return school
}

module.exports = {createSchool}