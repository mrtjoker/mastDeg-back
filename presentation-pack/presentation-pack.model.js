mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PresentationPackSchema = new Schema({
    presentationPackName: String,
    create_at: Date
});

var PresentationPack = mongoose.model("presentation-pack", PresentationPackSchema);

module.exports = { PresentationPack };

