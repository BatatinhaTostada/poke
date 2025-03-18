//configurar back end
//criar duas variaveis - consumir o framework express a instancia
const express = require('express');
const app = express();

//rota para os arquivos estaticos (public)
app.use(express.static('public'));

//qual irá rodar
app.listen(3000, () => {
    console.log('Servidor rodando no link https://localhost:3000')
})