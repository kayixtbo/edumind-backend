let EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "School", 
    columns: {
        id: {
            primary: true,
            type: "varchar",
            generated: "uuid",
        },
        cnpj: {
            type: "varchar",
            nullable: false
        },
        name: {
            type: "varchar",
            nullable: false
        },
        adress: {
            type: "varchar",
            nullable: false
        }
    }
})