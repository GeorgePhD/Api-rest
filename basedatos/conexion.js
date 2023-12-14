const mongoose = require('mongoose'); //it brings the mongoose library from node_modules

const conexion = async() => {
    try {

        await mongoose.connect("mongodb://localhost:27017/mi_blog");

        //parameters inside of an object in case of error shown
        //useNewUrlParser: true
        //useUnifiedTopology: true
        //useCreateIndex: true

        console.log("Base de datos conectada a base de datos mi_blog."); 

    } catch(error) {
        console.log(error)
        throw new Error('No se ha podido conectar con la base de datos.');
    }

}

module.exports = {
    conexion
}