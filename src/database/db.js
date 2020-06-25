//importar a dependêndia sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto qu irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//utilizar o objeto de banco de dados para nossas operações
db.serialize(() => {
 //com comandos sql:
    //criar uma tabela 
db.run(`
    CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
`)

//inserir dados na tabela
const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?)
`
const values = [
    "https://images.unsplash.com/flagged/photo-1571615754493-ff5d323d6526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "Colectoria",
    "Guilherme Gemballa, Jardim América",
    "Número 260",
    "Santa Catarina",
    "Rio do Sul",
    "Resíduos Eletrônicos e Lâmpadas"
]

function afterInsertData(err) {
    if(err) {
        return console.log(err)
    }
    console.log("Cadastrado com sucesso")
    console.log(this)
}

db.run(query, values, afterInsertData)





})