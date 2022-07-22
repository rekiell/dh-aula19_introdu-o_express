
// Importa o express para o projeto.

const Express = require ("express");

// Inicializando o express no projeto nodejs.
const aplicativo = new Express();

// Disponibiliza o recurso (Endpoint) via http.
aplicativo.get("/", (req, res) => res.send("Hello World") );

//Configurando a porta de acesso aos recurso do exprss via http.
aplicativo.listen(3000, () => console.log("Servidor okay.."));