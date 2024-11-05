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
        },
        id_school: {
            type: "varchar",
            nullable: false
        },
        id_responsible: {
            type: "varchar",
            nullable: false
        },
        id_class: {
            type: "varchar",
            nullable: false
        }
    },
    relations: {
        school: {
            target: "School",
            type: "many-to-one",
            JoinColumn: {
                name: "id_school"
            }
        }
    },
    relations: {
        responsible: {
            target: "Responsible",
            type: "one-to-many",
            JoinColumn: {
                name: "id_responsible"
            }
        }
    },
    relations: {
        class: {
            target: "Class",
            type: "one-to-many",
            JoinColumn: {
                name: "id_class"
            }
        }
    }
})