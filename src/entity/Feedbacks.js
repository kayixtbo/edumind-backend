const { JoinColumn } = require("typeorm")

let EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Feedbacks", 
    columns: {
        id: {
            primary: true,
            type: "varchar",
            generated: "uuid",
        },
        text: {
            type: "varchar",
            nullable: false
        },
        id_professional: {
            type: "varchar",
            nullable: false
        },
        id_students: {
            type: "varchar",
            nullable: false
        }
    },
    relations: {
        professional: {
            target: "Professional",
            type: "one-to-many",
            JoinColumn: {
                name: "id_professional"
            }
        },
        students: {
            target: "Students",
            type: "one-to-many",
            JoinColumn: {
                name: "id_students"
            }
        }
    }
})