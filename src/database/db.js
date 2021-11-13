const { Client } = require('pg')
const rotas = require('../rotas/rotas.js')

const client = new Client({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host:process.env.HOST,
    port: process.env.PORTDB,
    database: process.env.DATABASE 
})
client.connect()


const getBook = async (req, res)=> {
    const resultado= await client.query('select * from book')
    console.log(resultado.rows);
    res.json(resultado.rows)
}


module.exports = getBook