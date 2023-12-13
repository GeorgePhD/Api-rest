//initialize app
const {conexion} = require('./basedatos/conexion'); //pay attention to the paths!!!!!!!!
const express = require('express');
const cors = require('cors');
//const res = require('res');

console.log('App initialized') //run in node = node index.js

//connect to database
conexion();

//create node server
//first create const express = require('express'); up there after const mongoose.

const app = express();
const port = 3900;

//methods middleware for creating server instance with express middle function.
//these work as a way to create server paths/routes.

//configure cors
app.use(cors());

//read and convert body to object js
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

//FIRST ALTERNATIVE METHOD
//create routes
/* app.get('/testing', (req, res) => {

    console.log('endpoint executed');
}); */


//create server and listen HTTP petitions.
/* app.listen(port, () => {
    console.log('server running in port ' + port);
    
    return res.status(200).send(`
        <div>
            <h1>Testing sth</h1>
            <p>Creando api rest con node</p>
        </div>
    `);

}); */
//Routes

//routes
const routes_article = require('./routes/article');

// load routes
app.use("/api", routes_article);





//SECOND ALTERNATIVE METHOD
app.get('/testing', (req, res) => {
    console.log('endpoint executed');
    return res.status(200).json ({
                            curso: "Master on react", 
                            teacher: "George", 
                            Duración: "100 years"
                        });
                         //the method .send can be changed to .json if data is json wanted.
}); //if you wanna return an array of json objects you can use as follows = res.status(200).send ([{curso: "Master on react", teacher: "George", Duración: "100 years"},
//{curso: "Master on react", teacher: "George", Duración: "100 years"}]);


//Test route hardcoded
app.get('/', (req, res) => {
    console.log('endpoint executed');
    return res.status(200).send ("<h1>Api rest with node JS</h1>");
});


app.listen(port, () => {
    console.log('Server running on port ' + port);
    
});







