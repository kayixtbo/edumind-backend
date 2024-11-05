const { JoinColumn } = require("typeorm")

let EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Students", 
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
        registration: {
            type: "int",
            nullable: false
        }
    },
    relations: {
        school: {
            target: "School",
            type: "one-to-many",
            JoinColumn: {
                name: "school_id"
            }
        }
    },
    relations: {
        responsible: {
            target: "Responsible",
            type: "one-to-many",
            JoinColumn: {
                name: "responsible_id"
            }
        }
    },
    relations: {
        class: {
            target: "Class",
            type: "one-to-many",
            JoinColumn: {
                name: "class_id"
            }
        }
    }
})