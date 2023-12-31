const express = require('express');
const routes = require('./routes')
require('./database')
const cors = require('cors');

const app = express();

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', '*')
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", '*');
    app.use(cors());
    next();
});


app.use(express.json());
app.use(routes);

app.listen(3333);