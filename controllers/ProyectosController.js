const { request } = require("express")
const Proyectos = require('../models/Mascota');
const Tareas = require('../models/Amo');
const { body } = require('express-validator');
const slug = require('slug');





exports.ProyectoporUrl= async (request, response, next)=>{
    flag = "";
        const proyectosPromise = Proyectos.findAll();
        try{
            proyectoPromise = Proyectos.findOne(
                {
                    where:{
                        id:request.params.url
                    }
                }
            );

            [proyectos, proyecto] = await Promise.all([proyectosPromise,proyectoPromise]);

            tareas = await Tareas.findAll({
                where:{
                    mascotumId : proyecto.id
                },
                include: [{ model: Proyectos}]
            });
        }catch (error){
            console.log("ERRRRRROR");
            flag = "vacio";
            tareas = "";
        }
    //if(!proyecto) return next();


    response.render('mascota', {
        nombrePagina: 'Tareas del Proyecto',
        flag,
        proyecto, 
        proyectos,
        tareas,
    })

}
exports.eliminarMascota = async(request, response)=>{
    //console.log(request.params);
    const { id }= request.params;
    //Eliminar
    const resultado = await Tareas.destroy({where:{id}});

    if(!resultado) return next();

    response.status(200).send("Tarea Eliminada Correctamente");
}



