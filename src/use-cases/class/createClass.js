let {dataSource} = require("../../dataSource")

async function createClass(name, id_school) {
    let classRepository = dataSource.getRepository('Class')

    let school = await classRepository.save({
        name: name,
        id_school: id_school
    })

    return school
}

module.exports = {createClass}