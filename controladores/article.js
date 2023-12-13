

const test = (req, res) => {
    
    return res.status(200).json({
        message: "trying controlador de articles"
    });
}

const course = (req, res) => {
    console.log('endpoint executed');
    return res.status(200).json  ({ //res.status(200).send is also possible
                            curso: "Master on react", 
                            teacher: "George", 
                            Duración: "100 years"
                        });
                         //the method .send can be changed to .json if data is json wanted.
};

module.exports = {
    test,
    course
}











