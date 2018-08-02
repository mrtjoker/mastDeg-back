mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IndicationsSchema = new Schema({
    indicationsName: String,
    create_at: Date
});

var Indications = mongoose.model("indications", IndicationsSchema);

module.exports = { Indications };

