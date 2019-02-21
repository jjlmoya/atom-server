const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdminRouterSchema = new Schema({
    name: {type: String, required: true},
    icon: {type: String, lowercase: true},
    order: {type: Number, required: true, default: 0},
    tabs: [
        {
            name: {type: String, required: true},
            icon: {type: String, lowercase: true},
            order: {type: Number, required: true, default: 0},
            path: {type: String, required: true, lowercase: true}
        }
    ]
});

module.exports = mongoose.model('AdminRouter', AdminRouterSchema);