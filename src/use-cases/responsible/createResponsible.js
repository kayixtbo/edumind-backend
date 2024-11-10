let {dataSource} = require("../../dataSource")

async function createResponsible(name, id_school, birth) {

    try {
        let responsibleRepository = dataSource.getRepository('Responsible')
    
        let responsible = await responsibleRepository.save({
            name: name,
            id_school: id_school,
            birth: birth
        })
    
        return responsible
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {createResponsible}