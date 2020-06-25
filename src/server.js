const express = require("express")
const server = express()

//configurar pasta public:
server.use(express.static("public"))

//Utilizando template engine:
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//confirgurar os caminhos da aplicação:
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/achados", (req, res) => {
    return res.render("achados.html")
})

server.get("/perdidos", (req, res) => {
    return res.render("perdidos.html")
})

server.get("/casos-ativos", (req, res) => {
    return res.render("casos-ativos.html")
})

server.get("/casos-solucionados", (req, res) => {
    return res.render("casos-solucionados.html")
})

//ligar o servidor no comando Bash: node src/server.js
//iniciar com comando Bash: npm start
server.listen(3000)