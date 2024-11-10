let {dataSource} = require("../../dataSource")
const Feedbacks = require("../../entity/Feedbacks")

async function deleteFeedbacks(id,) {

    try {
        
        let deletedFeedback = dataSource
        .createQueryBuilder()
        .delete()
        .from(Feedbacks)
        .where("id = :id", { id: id })
        .execute()
    
        return deletedFeedback
    } catch (error) {
        throw new Error(`erro: ${error.message}`)    
    }
}

module.exports = {deleteFeedbacks}