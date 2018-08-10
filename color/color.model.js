mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColorSchema = new Schema({
    color: String,
    colorCode: String,
    create_at: Date
});

var Color = mongoose.model("color", ColorSchema);

module.exports = { Color };

