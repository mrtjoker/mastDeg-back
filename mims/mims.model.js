mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MimsSchema = new Schema({
    mimsClass: String,
    create_at: Date
});

var Mims = mongoose.model("mims", MimsSchema);

module.exports = { Mims };

