mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WarningSchema = new Schema({
    warning: String,
    create_at: Date
});

var Warning = mongoose.model("warning", WarningSchema);

module.exports = { Warning };

