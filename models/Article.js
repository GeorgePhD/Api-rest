

const {Schema, model} = require('mongoose');

//shceme object model = defines how the article will be structured.
const ArticleSchema = Schema({

    title: {
        type: String,
        required: true
    }, 
    content: {
        type: String,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }, 
    image: {
        type: String,
        default: "default.jpg"
    } 
})

module.exports = model("Article", ArticleSchema, "articles");
















