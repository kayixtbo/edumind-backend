const { JoinColumn } = require("typeorm")

let EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Responsible", 
    columns: {
        id: {
            primary: true,
            type: "varchar",
            generated: "uuid",
        },
        name: {
            type: "varchar",
            nullable: false
        },
        birth: {
            type: "date",
            nullable: false
        },
        id_school: {
            type: "varchar",
            nullable: false
        }
    },
    relations: {
        school: {
            target: "School",
            type: "many-to-many",
            JoinColumn: {
                name: "id_school"
            }
        }
    }
})