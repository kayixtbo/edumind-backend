let EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Class",
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
        id_school: {
            type: "varchar", 
            nullable: false
        }
    },
    relations: {
        school: { 
            type: "many-to-one",
            target: "School",
            joinColumn: {
                name: "id_school" 
            }
        }
    }
});