const express = require('express')
const app = express();
const rotas = express.Router();
//const path = require('path');
//const { getBook } = require('../database/db')
const db = require('../database/db')


app.use(express.json())



module.exports = rotas