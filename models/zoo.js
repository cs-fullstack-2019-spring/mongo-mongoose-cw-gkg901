var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//ZOO SCHEMA
var ZooSchema = new Schema({
    animal_id: String,
    animal_type: String,
    animal_description: String,
});

//Export model
module.exports = mongoose.model('Zoo', ZooSchema);