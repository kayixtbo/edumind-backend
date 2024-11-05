const { JoinColumn } = require("typeorm")

let EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Professional", 
    columns: {
        id: {
            primary: true,
            type: "varchar",
            generated: "uuid",
        },
        text: {
            type: "varchar",
            nullable: false
        }
    },
    relations: {
        professional: {
            target: "Professional",
            type: "one-to-many",
            JoinColumn: {
                name: "professional_id"
            }
        }
    },
    relations: {
        students: {
            target: "Students",
            type: "one-to-many",
            JoinColumn: {
                name: "students_id"
            }
        }
    }
})