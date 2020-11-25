const {Sequelize} = require('sequelize');
require('dotenv').config({path:variables.env});
//BD de Desarrollo
const db = new Sequelize(
process.env.BD_NOMBRE,
process.env.BD_USER,
process.env.BD_PASS,
{
    host:process.env.BD_HOST,
    dialect:'mysql',
    port:process.env.PORT,
    define:{

        timestamps:false
    }
});


module.exports = db;