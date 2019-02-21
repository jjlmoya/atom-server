const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NavBarSchema = new Schema ({
    slug: {type: String, required: true},
    name: {type: String, required: true}
});


module.exports = mongoose.model('NavBar', NavBarSchema);