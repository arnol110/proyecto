const {Sequelize} = require('sequelize');

//BD de Desarrollo
const db = new Sequelize('globalre_desarrollopet','globalre_petuser','boHs9k#~,^6K',{
    host:'18.214.219.22',
    dialect:'mysql',
    port:'3306',
    define:{

        timestamps:false
    }
});


module.exports = db;