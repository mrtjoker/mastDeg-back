mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenericNameSchema = new Schema({
    genericName: String,
    create_at: Date
});

var GenericName = mongoose.model("generic-name", GenericNameSchema);

module.exports = { GenericName };

