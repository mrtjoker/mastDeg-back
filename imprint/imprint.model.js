mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImprintSchema = new Schema({
    imprint: String,
    create_at: Date
});

var Imprint = mongoose.model("imprint", ImprintSchema);

module.exports = { Imprint };

