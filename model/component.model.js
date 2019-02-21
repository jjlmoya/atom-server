const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ComponentSchema = new Schema({
    ecommerce: {
        image: {data: Buffer, contentType: String},
        title: {type: String, required: true},
        description: {type: String, required: true},
        article: {type: String},
        price: 0,
        discount: {type: Number},
        slug: {type: String, required: true, lowercase: true},
        stock: 0
    },
    name: {type: String, required: true},
    keyFeatures: [{type: String}],
    videoUri: {type: String, lowercase: true, required: true},
    tags: [{type: String}],
    comments: {type: String}
});


module.exports = mongoose.model('Component', ComponentSchema);