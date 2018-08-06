mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PresentationSchema = new Schema({
    presentation: String,
    create_at: Date
});

var Presentation = mongoose.model("presentation", PresentationSchema);

module.exports = { Presentation };

