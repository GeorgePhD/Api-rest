

const express = require('express');
const router = express.Router();
//const ArticleController = require('../controladores/article');


const ArticleController = {
    prueba: (req, res) => {
        res.status(200).json({
            message: "Prueba successful",
        });
    },
    course: (req, res) => {
        res.status(200).json({
            message: "Prueba course successful",
        });
    },
};

//module.exports = ;

//testing routes
router.get("/ruta-de-prueba", ArticleController.prueba);
router.get("/course", ArticleController.course);





module.exports = {
    router,
    ArticleController
}








