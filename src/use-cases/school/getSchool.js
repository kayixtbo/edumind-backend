let {dataSource} = require("../../dataSource")

async function getSchool() {

    try {
        let schoolRepository = await dataSource // realizando a query
            .getRepository('School')
            .createQueryBuilder('school')
            .getMany()
        
        return schoolRepository
    } catch (error) {
        throw new Error(`erro: ${error.messag}`)
    }
}

module.exports = {getSchool}