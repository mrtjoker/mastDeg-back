mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DosageSchema = new Schema({
    dosageName: String,
    create_at: Date
});

var Dosage = mongoose.model("dosage", DosageSchema);

module.exports = { Dosage };

