const {conexion} = require('./basedatos/conexion')
const express = require('express');
const cors = require('cors');
//initiate app
console.log('working perfectlyy');

//connect to database
conexion();

//create node server
const app = express();
const port = 3900;
//middleware = it helps with the accesses between domains.
app.use(cors());

//convert body to json object
app.use(express.json()); // recibir datos con content-type: application/json
app.use(express.urlencoded({ extended: true })); //form-urlencoded

//create routes
app.get('/', (req, res) => {
    console.log('first route workng great');

    return res.status(200).send('<h1>First route working great, creating api rest with node js</h1>');
});

//routes
const rutas_articulo = require('./rutas/rutas-articulo.js');

//load routes
app.use("/api", rutas_articulo);






//hardcore testing routes
app.get('/probando', (req, res) => {

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
});


//create server and listen to requests
app.listen(port, () => {
    console.log('server running on port ' + port);
})