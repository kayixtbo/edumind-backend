const { JoinColumn } = require("typeorm");

let EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "School", 
    columns: {
        id: {
            primary: true,
            type: "varchar",
            generated: "uuid",
        },
        cnpj: {
            type: "varchar",
            nullable: false
        },
        name: {
            type: "varchar",
            nullable: false
        },
        address: { 
            type: "varchar",
            nullable: false
        }
    },
    relations: {
        classes: { 
            type: "one-to-many",
            target: "Class",
            inverseSide: "school", 
            cascade: true 
        }
    },
    relation: {
        students: {
            type: "one-to-many",
            target: "Students",
            inverseSide: "school",
            cascade: true
        }
    },
    relation: {
        professional: {
            type: "many-to-many",
            target: "Professional",
            inverseSide: "school",
            cascade: true
        }
    },
    relation: {
        responsible: {
            type: "many-to-many",
            target: "Responsible",
            inverseSide: "school",
            cascade: true,
            JoinColumn: {
                name: "responsibles"
            }
        }
    }
});