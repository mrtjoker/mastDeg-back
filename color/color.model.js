mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColorSchema = new Schema({
    colorName: String,
    create_at: Date
});

var Color = mongoose.model("color", ColorSchema);

module.exports = { Color };

