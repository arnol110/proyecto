const Sequelize = require('sequelize');
const slug = require('slug');
const shortid = require('shortid');
const db = require('../config/db');

const Proyectos = db.define('mascota',{
    id:{
        type:Sequelize.BIGINT(15),
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:Sequelize.STRING(60),
        allowNull:false

    },
    fecha_nace:{
        type:Sequelize.DATE(),
        allowNull:false

    },
    especie:{
        type:Sequelize.STRING(100),
        allowNull:false

    },
    genero:{
        type:Sequelize.STRING(100),
        allowNull:false

    },
    url: Sequelize.STRING
},{
   hooks:{
       beforeCreate(proyecto){
            const url = slug(proyecto.nombre).toLowerCase();
            proyecto.url = `${url}-${shortid.generate()}`;
       }
   } 
}
);

module.exports = Proyectos;