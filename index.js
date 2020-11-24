const express = require('express');
const { request, response } = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

const helpers= require('./helpers');

require('./models/Mascota');
require('./models/Amo');

const db = require('./config/db');

db.sync()
    .then(()=> console.log('Conectado a la Fiesta'))
    .catch(error => console.log(error))

//creción  de una app express

const app = express();

app.use(express.static('public'));

app.set('view engine','pug');

app.set('views', path.join(__dirname,'./views'));

app.use((request, response, next)=>{
    response.locals.vardump = helpers.vardump;
    next();
})

app.use((request, response, next)=>{
    //console.log('Otro Middleware');
    const fecha = new Date();
    response.locals.fecha = fecha.getFullYear();
    next();
})


//habilitar librería bodyParser
app.use(bodyParser.urlencoded({extended:true}));

//ruta para el home
app.use('/', routes());

//puerto a escuchar para el servidor
app.listen(5000);

