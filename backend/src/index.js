const express = require('express');
const routes = require('./routes');
const cors = require('cors') ;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// Rota / Recurso


/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT> Alterar uma informação no back-end
 * DELETE: Deletar uma informação
 */

/**
 * Tipo de parametros
 * 
 * Query parmas: parametros nomeados enviados na rota após o "?" (Filtros, paginação, etc)
 * Route Parmas = Paràmetros utlizados para identificar recursos
 * Request Body = Corpo da requisição utlizado para criar ou alterar recursos
 */

/**
 *  SQL: Mysql, Postgre etc
 *  NoSql: MongoDB, CouchDB, etc 
 *
 */

/**
 * Driver: SELECT * FROM USERS
 * Query Builder: table('USERS').select('*').where()
 */



app.listen(3333);