mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsFDASchema = new Schema({
    usFDAName: String,
    create_at: Date
});

var UsFDA = mongoose.model("us-fda", UsFDASchema);

module.exports = { UsFDA };

