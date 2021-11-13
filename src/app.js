const express = require('express');
const app = express();
require('dotenv').config()
const rotas = require('./rotas/rotas.js')
const port = process.env.PORT;
const db = require('./database/db')


app.use(rotas);
app.use(db);
app.use(express.static('public'))



app.listen(port, ()=> {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
