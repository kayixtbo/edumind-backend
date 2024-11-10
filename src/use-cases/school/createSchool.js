let {dataSource} = require("../../dataSource")

async function createSchool(name, cnpj, address) {

    try {
        let schoolRepository = dataSource.getRepository('School')
    
        let school = await schoolRepository.save({
            name: name,
            cnpj: cnpj,
            address: address
        })
    
        return school
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {createSchool}