let EntitySchema = require("typeorm").EntitySchema;

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
            joinColumn: {
                name: "id_school"
            }
        },
        responsible: {
            target: "Responsible",
            type: "many-to-one",
            joinColumn: {
                name: "id_responsible"
            }
        },
        class: {
            target: "Class",
            type: "many-to-one",
            joinColumn: {
                name: "id_class"
            }
        }
    }
});