const Sequelize = require('sequelize');
const db = require('../config/db');
const Mascota = require('./Mascota');

const Tareas = db.define('amo',{
    id:{
        type: Sequelize.BIGINT(15),
        primaryKey: true,
        autoIncrement: true
    },
    tarea: Sequelize.STRING(100),
    estado: Sequelize.STRING(15)
});
Tareas.belongsTo(Mascota);

//Proyectos.hasMany(Tareas);

module.exports = Tareas;