let typeorm = require("typeorm")
require('dotenv').config()

let dataSource = new typeorm.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_DATABASE,
    synchronize: true,
    entities: [
        require("./entity/School"),
        require("./entity/Class"),
        require("./entity/Responsible"),
        require("./entity/Professional"),
        require("./entity/Students"),
        require("./entity/Feedbacks")
    ]
})

module.exports = {dataSource}
