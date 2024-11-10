let {dataSource} = require("../../dataSource")

async function createClass(name, id_school) {

    try {
        let classRepository = dataSource.getRepository('Class')
    
        let school = await classRepository.save({
            name: name,
            id_school: id_school
        })
    
        return school
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {createClass}