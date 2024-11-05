let {dataSource} = require("../../dataSource")

async function putFeedback(data, id) {
    await dataSource // realizando a query
        .getRepository('Feedback')
        .createQueryBuilder('feedback')
        .update()
        .set(data)
        .where("id = :id", {id: id})
        .execute()
        
    let updatedFeedbak = await dataSource
        .getRepository('Feedback')
        .findOne({ where: { id: id } });

    return updatedFeedbak
}

module.exports = {putFeedback}