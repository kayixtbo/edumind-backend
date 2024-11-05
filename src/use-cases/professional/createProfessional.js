let {dataSource} = require("../../dataSource")

async function createProfessional(name, registration, birth,address,occupation) {
    let professionalRepository = dataSource.getRepository('Professional')

    let professional = await professionalRepository.save({
        name: name,
        birth: birth,
        registration: registration,
        address: address,
        occupation: occupation
    })

    return professional
}

module.exports = {createProfessional}