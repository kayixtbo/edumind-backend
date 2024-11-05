let EntitySchema = require("typeorm").EntitySchema

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
        }
    },
    relations: {
        school: {
            type: "one-to-many",
            target: "School",
            JoinColumn: {
                name: "school_id"
            }
        }
    },
})