let EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Professional", 
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
        address: {
            type: "varchar",
            nullable: false
        },
        occupation: {
            type: "varchar",
            nullable: false
        },
        birth: {
            type: "date",
            nullable: false
        }
    },
    relations: {
        school: {
            target: "School",
            type: "many-to-many",
            inverseSide: "professional",
            joinTable: true  // Indica que o TypeORM criará a tabela de junção
        }
    }
});