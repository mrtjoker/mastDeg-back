mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ThaiFDASchema = new Schema({
    initialThaiFDA: String,
    thaiFDAEN: String,
    thaiFDATH: String,
    create_at: Date
});

var ThaiFDA = mongoose.model("thai-fda", ThaiFDASchema);

module.exports = { ThaiFDA };

