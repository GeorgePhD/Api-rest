//functional programming
const validator = require('validator');
const Articulo = require('../modelos/Articulo');
const prueba = (req, res) => {

    return res.status(200).json({
        mensaje: "test action in my articles controller"
    })
};

const curso = (req, res) => {

    return res.status(200).json([
        {
            course: "Master in Web Development",
            name: "George",
            age: 40,
        },
        {
            course: "Master in coffee Development",
            name: "Fer",
            age: 30,
        }
    ]);
};

const crear = (req, res) => {

    //recoger parametros por post para guardar

    let parametros = req.body;

    //validar data

    try {
        let validar_titulo = !validator.isEmpty(parametros.titulo) && validator.isLength(parametros.titulo, { min: 5, max: undefined });
        let validar_contenido = !validator.isEmpty(parametros.contenido);


        if (!validar_titulo || !validar_contenido) {
            throw new Error("No se ha validado la información");
        }
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "Faltan datos por enviar"
        })
    };


    //crear objecto a guardar

    const articulo = new Articulo(parametros); //auto

    //asignar valores a object basado en el modelo(manual o auto)

    //articulo.titulo = parametros.titulo; manual


    //guardar articulo en base de datos

    articulo.save()
        .then(articuloGuardado => {

            if (!articuloGuardado) {
                return res.status(400).json({
                    status: "error",
                    message: "No se ha guardado el articulo"
                });

            }
            //devolver resultado
            return res.status(200).json({
                status: "success!",
                articulo: articuloGuardado,
                mensaje: "artículo guardado. Create action in my articles controller, use post method in postman to see this response",
            });
        })
        .catch(error => {
            return res.status(400).json({
                status: "error",
                message: "No se ha guardado el articulo",
                error: error.message // optionally includes the error message in the response.
            });
        });
};
const listar = (req, res) => {
    Articulo.find({})
        .exec()
        .then(articulos => {
            if (!articulos || articulos.length === 0) {
                return res.status(404).json({
                    status: "error",
                    message: "No se han encontrado artículos"
                });
            }

            return res.status(200).json({
                status: "success!",
                articulos
            });
        })
        .catch(error => {
            return res.status(500).json({
                status: "error",
                message: "Error al buscar artículos",
                error: error.message
            });
        });
};



module.exports = {
    prueba,
    curso,
    crear,
    listar
}