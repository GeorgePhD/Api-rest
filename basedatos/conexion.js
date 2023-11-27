


const mongoose = require('mongoose');



const db = 'My_blog';

const conexion = async() => {
    
    try {
        

        await mongoose.connect("mongodb://127.0.0.1:27017/My_blog");
        //do this using curly brackets before the parentheses and add a coma after the apostrophe after the word My_blog.
        //parameters to add in case of connection failure
        //useNewUrlParser: true
        //useUnifiedTopology: true
        //useCreateIndex: true
        console.log('connection established to ' + db);
    } catch (error) {
        console.log(error);
        throw new Error('unable to connect to Database');
    }
}

module.exports = { //module from nodeJS
    conexion
}


























