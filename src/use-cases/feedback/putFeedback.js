let {dataSource} = require("../../dataSource")

async function putFeedback(data, id) {

    try {
        await dataSource // realizando a query
            .getRepository('Feedback')
            .createQueryBuilder('feedbacks')
            .update()
            .set(data)
            .where("id = :id", {id: id})
            .execute()
            
        let updatedFeedbak = await dataSource
            .getRepository('Feedback')
            .findOne({ where: { id: id } });
    
        return updatedFeedbak
        
    } catch (error) {
        throw new Error(`erro: ${error.message}`)
    }
}

module.exports = {putFeedback}