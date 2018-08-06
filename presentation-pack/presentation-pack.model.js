mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PresentationPackSchema = new Schema({
    presentationPack: String,
    create_at: Date
});

var PresentationPack = mongoose.model("presentation-pack", PresentationPackSchema);

module.exports = { PresentationPack };

