let EntitySchema = require("typeorm").EntitySchema;

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
        }
    },
    relations: {
        school: {
            target: "School",
            type: "many-to-many",
            inverseSide: "responsible",
            joinTable: true  // Isso cria a tabela de junção automaticamente
        }
    }
});